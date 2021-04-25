import { Request, Response } from "express";
import { ShortenerModel } from "../models/shortener";
import { urlAlphabet, customAlphabet, nanoid } from "nanoid";

export const shortenURL = async (
  req: Request,
  res: Response
): Promise<void> => {
  const short_url = customAlphabet(urlAlphabet, 6)();

  const shortenData = new ShortenerModel({
    orginal_url: req.body.url,
    short_url,
    modified_on: new Date(),
  });

  try {
    const savedURL = await shortenData.save();
    res.json({
      error: null,
      data: { shortenURLId: savedURL._id, shortenedURL: savedURL.short_url },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const redirectURL = async (
  req: Request,
  res: Response
): Promise<void> => {
  const url = req.params.url;

  try {
    const savedURL = await ShortenerModel.findOne({ short_url: url });
    if (savedURL) res.redirect(savedURL.orginal_url);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

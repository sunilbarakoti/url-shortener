import { Request, Response } from "express";

export const logger = (
  req: Request,
  res: Response,
  next: (err?: any) => any
) => {
  console.log(`${req.method}`);
  next();
};

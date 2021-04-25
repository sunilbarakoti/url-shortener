"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectURL = exports.shortenURL = void 0;
const shortener_1 = require("../models/shortener");
const nanoid_1 = require("nanoid");
const shortenURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shortenData = new shortener_1.ShortenerModel({
        orginal_url: req.body.url,
        modified_on: new Date(),
    });
    console.log(nanoid_1.nanoid(10));
    try {
        const savedURL = yield shortenData.save();
        res.json({
            error: null,
            data: { shortenURLId: savedURL._id, shortenedURL: savedURL.short_url },
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.shortenURL = shortenURL;
const redirectURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.params.url;
    try {
        const savedURL = yield shortener_1.ShortenerModel.findOne({ short_url: url });
        res.redirect(savedURL.orginal_url);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.redirectURL = redirectURL;
//# sourceMappingURL=shortener.js.map
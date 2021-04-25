"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortener_1 = require("../controller/shortener");
const logger_1 = require("../utilites/logger");
const router = express_1.default.Router();
router.post("/", logger_1.logger, shortener_1.shortenURL);
router.get("/:url", logger_1.logger, shortener_1.redirectURL);
exports.default = router;
//# sourceMappingURL=shortener.js.map
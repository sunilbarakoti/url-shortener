"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerModel = exports.ShortenerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
exports.ShortenerSchema = new mongoose_1.default.Schema({
    orginal_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        default: nanoid_1.customAlphabet,
        required: true,
    },
    created_by: {
        type: String,
        required: false, // user id should be placed here
    },
    created_on: {
        type: Date,
        default: Date.now,
    },
    modified_on: {
        type: Date,
        required: true,
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true,
    },
});
exports.ShortenerModel = mongoose_1.default.model("Short", exports.ShortenerSchema);
//# sourceMappingURL=shortener.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const shortener_1 = __importDefault(require("./routes/shortener"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log("Connected to db"));
const app = express_1.default();
app.use(express_1.default.json());
app.use("/shortner", shortener_1.default);
app.listen(port, () => {
    console.log(`Server started at: ${port}`);
});
//# sourceMappingURL=server.js.map
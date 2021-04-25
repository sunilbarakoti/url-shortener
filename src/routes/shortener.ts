import express from "express";

import { redirectURL, shortenURL } from "../controller/shortener";
import { logger } from "../utilites/logger";

const router = express.Router();

router.post("/", logger, shortenURL);
router.get("/:url", logger, redirectURL);

export default router;

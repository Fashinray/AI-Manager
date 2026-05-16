import express from "express";
import { askAI } from "../utils/askAI";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  const response = await askAI(message);

  res.json({ result: response });
});

export default router;
import express from "express";
import { askAI } from "../utils/askAI";
 

const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  const category = await askAI(
    `Categorize this prompt (coding, writing, marketing):\n${prompt}`
  );

  res.json({ result: category });
});

export default router;
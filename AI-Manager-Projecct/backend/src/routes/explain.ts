import express from "express";
import { askAI } from "../utils/askAI";
 

const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  const improved = await askAI(
    `Improve this prompt professionally:\n${prompt}`
  );

  res.json({ result: improved });
});

export default router;
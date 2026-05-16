import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'dotenv/config';

import improveRoute from "./routes/improve";
import explainRoute from "./routes/explain";
import categoryRoute from "./routes/category";
import chatRoute from "./routes/chat";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/improve", improveRoute);
app.use("/api/explain", explainRoute);
app.use("/api/category", categoryRoute);
app.use("/api/chat", chatRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
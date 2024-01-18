import express, { Express, Request, Response } from "express";
import connectToMongoDB from "../database/connect";
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.json("Express + TypeScript Server");
});

connectToMongoDB(process.env.MONGO_URI)
.then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error('Failed to connect to MongoDB database:', error);
  process.exit(1);
})
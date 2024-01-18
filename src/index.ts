import express, { Express, Request, Response } from "express";
import connectToMongoDB from "./database/connect";
import { ImageModel, IImage } from "./models/imageModel";
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.json("You know its working stop extra checking, mumu!!!");
});

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in the environment variables.');
  process.exit(1);
}

const mongoKey = process.env.MONGO_URI;
connectToMongoDB(mongoKey)
.then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error('Failed to connect to MongoDB database:', error);
  process.exit(1);
})
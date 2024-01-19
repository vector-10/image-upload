import express, { Express, Request, Response } from "express";
import connectToMongoDB from "./database/connect";
import imageRoute from "./routes/imageRoute";
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 4000;

//sample GET route to test the server
app.get("/", (req: Request, res: Response) => {
  res.json({message: "Hello from Server"});
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', imageRoute);

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
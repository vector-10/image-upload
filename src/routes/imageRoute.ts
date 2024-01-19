// imageRoutes.ts
import express from 'express';
import { processImage, getImage } from '../controllers/uploadController';
import upload from '../utils/multer';
import setResponseObject from '../middleware/setResponse';


const router = express.Router();
// define route  paths
router.post("/upload", setResponseObject, upload.single('file'), processImage);
router.get('/get_image/:id', getImage);

export default router;

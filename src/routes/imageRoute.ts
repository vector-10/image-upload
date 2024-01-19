// imageRoutes.ts
import express from 'express';
import { processImage, getImage } from '../controllers/uploadController';

const router = express.Router();
// define route  paths
router.post('/upload', processImage);
router.get('/get_image/:id', getImage);

export default router;

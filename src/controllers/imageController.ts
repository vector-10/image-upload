import { Request, Response, NextFunction } from 'express';
import catchAsyncErrors from '../middleware/catchAsyncErrors';
import { ErrorHandler } from '../utils/errorHandler';
import multer from 'multer';
import { ImageModel } from '../models/imageModel';


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImage = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file || !req.file.mimetype.startsWith('image')) {
      throw new ErrorHandler('Please upload an image file', 400);
    }

    const filename = req.file.originalname;
    const data = req.file.buffer.toString('base64');
    const url = `data:${req.file.mimetype};base64,${data}`;

    const image = new ImageModel({ filename, url });
    await image.save();

    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    next(error); // Pass the caught error to the error handler middleware
  }
});

export default uploadImage;

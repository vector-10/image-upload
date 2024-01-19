import { Request, Response } from 'express';
import multer from 'multer';
import Image, { IImage } from '../models/imageModel';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadImage = upload.single('image');

// POST image controller using async/await 
export const processImage = async (req: Request, res: Response) => {
  try {
    // simple validatiion to ensure image file is provided
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' });
    }
    // Save the image file to mongoDB
    const image = new Image({
      filename: req.file.originalname,
      path: req.file.buffer.toString('base64'),
    });
    // mongoose method for saving items to the database
    await image.save();
    
    // success response in json when image was uploaded successfully
    return res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
      // log errors to thee console for proper understanding
    console.log(error);
    return res.status(500).json({ error: 'Server error: Error uploading Image' });
  }
};

// GET image controller using async/await 
export const getImage = async (req: Request, res: Response) => {
  try {
    // GET the image from MongoDB database through the findById mongoose method
    const imageId = req.params.id;
    const image: IImage | null = await Image.findById(imageId);

    //simple validatiion if image is not found on the database
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // To get the image with a secure base64 encoding format
    const imageUrl = `data:image/png;base64,${image.path}`;

    // return image url in json file
    return res.status(200).json({ imageUrl });
  } catch (error) {
    // log errors to thee console for proper understanding
    console.log(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

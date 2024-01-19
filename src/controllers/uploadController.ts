import { Request, Response, NextFunction } from 'express';
import Image from '../models/imageModel';

// POST image controller using async/await 
export const processImage = (async (req: Request, res: Response, next: NextFunction) => {
  try {
    //validate input
    if (!req.file) {
      res.status(400).json({
        status: "Error",
        message: "Please upload an Image",
      });
    }
    // Create image
    const uploadImage = new Image({
      img: req.file?.buffer.toString("base64"),
    });

    await uploadImage.save();

    const response = {
      message: "file uploaded sucessfully",
      imageUrl: `/get_image/${uploadImage._id}`,
      details: {
        fileName: req.file?.originalname,
        size: req.file?.size,
        mimetype: req.file?.mimetype,
      },
    };

    res.status(200).json({
      response: response
    })

  } catch (error: any) {
    next(error);
  }
}
);

// GET image controller using async/await 
export const getImage =  (async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      throw new Error("Image not found");
    }
    const response = {
      message: "Image found successfully",
      image,
    };
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});
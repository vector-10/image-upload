import { Schema, Document, model } from 'mongoose';

interface IImage extends Document {
    filename: string;
    path:string;
}

const ImageSchema: Schema = new Schema({
    filename: {
        type: String,
        required: [true]
    },
    path:{
        type: String, 
        required: true
    }
});

const ImageModel = model<IImage>('Image', ImageSchema);

export { ImageModel, IImage };
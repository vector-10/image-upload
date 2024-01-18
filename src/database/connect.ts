// require mongoose module with the import syntax
import mongoose from 'mongoose';

const connectToMongoDB = async (uri: string): Promise<void> => {
    try {
        await mongoose.connect(uri)
        console.log('connected to MongoDB');        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export default connectToMongoDB;
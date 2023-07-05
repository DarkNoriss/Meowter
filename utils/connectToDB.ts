import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) return console.log('MongoDB is already connected');

  const mongoURI = process.env.MONGODB_URI as string;

  try {
    await mongoose.connect(mongoURI, {
      dbName: 'meowter',
    });

    mongoose.set('strict', 'throw');
    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

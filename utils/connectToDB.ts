import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        dbName: 'meowter',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );

    isConnected = true;
    console.log('MongoDB connected');
  } catch (e) {
    console.log(e);
  }
};

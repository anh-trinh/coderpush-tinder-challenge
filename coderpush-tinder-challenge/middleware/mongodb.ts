import mongoose from 'mongoose';

const MONGO_URI: string = process.env.MONGO_URI ?? '';

const connectDB = (handler: any) => async (request: any, response: any) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(request, response);
  }

  // Use new db connection
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as any);
  return handler(request, response);
};

export default connectDB;

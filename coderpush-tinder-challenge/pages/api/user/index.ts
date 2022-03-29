import connectDB from '../../../middlewares/Mongodb';
import UserSchema from '../../../schemas/UserSchema';

const userHandler = async (request: any, response: any) => {
  const { method } = request;
  switch (method) {
    case 'GET':
      try {
        const page: number = Number(request?.query?.page ?? 1);
        const limit: number = Number(request?.query?.limit ?? 0);
        const currentUserId: string = request?.query?.currentUserId;
        const users = await UserSchema.find({ _id: { $ne: currentUserId } }).skip((page - 1) * limit).limit(limit);
        response.status(200).json({ success: true, data: users })
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(400).json({ success: false });
      break;
  }
};

export default connectDB(userHandler);

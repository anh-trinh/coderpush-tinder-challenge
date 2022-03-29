import connectDB from '../../../middleware/mongodb';
import UserSchema from '../../../schemas/UserSchema';

const userHandler = async (request: any, response: any) => {
  const { method } = request;
  switch (method) {
    case 'GET':
      try {
        const users = await UserSchema.find({});
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

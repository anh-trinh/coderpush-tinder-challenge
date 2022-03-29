import connectDB from '../../../middlewares/Mongodb';
import UserSchema from '../../../schemas/UserSchema';
import { User } from '../../../models/User';

const userHandler = async (request: any, response: any) => {
  const { method } = request;
  switch (method) {
    case 'GET':
      try {
        const page = Number(request?.query?.page ?? 1);
        const limit = Number(request?.query?.limit ?? 0);
        const currentUserId: string = request?.query?.currentUserId;
        const currentUser: User | null = await UserSchema.findById(
          currentUserId
        );
        const currentUserLikes: string[] = currentUser?.likes ?? [];
        const currentUserPasses: string[] = currentUser?.passes ?? [];
        const users: User[] = await UserSchema.find({})
          .where('_id')
          .ne(currentUserId)
          .nin([...currentUserLikes, ...currentUserPasses])
          .skip((page - 1) * limit)
          .limit(limit);
        response.status(200).json({ success: true, data: users });
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

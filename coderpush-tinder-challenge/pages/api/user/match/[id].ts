import { User } from '../../../../models/User';
import UserSchema from '../../../../schemas/UserSchema';
import connectDB from '../../../../middlewares/Mongodb';

const matchHandler = async (request: any, response: any) => {
  const {
    method,
    query: { id },
  } = request;
  switch (method) {
    case 'GET':
      try {
        const currentUser: User | null = await UserSchema.findById(id);
        const currentUserLikes: string[] = currentUser?.likes ?? [];
        const users: User[] = await UserSchema.find({})
          .where('_id')
          .in(currentUserLikes)
          .where('likes')
          .equals(id);
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

export default connectDB(matchHandler);

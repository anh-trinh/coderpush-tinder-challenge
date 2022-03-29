import UserSchema from '../../../../schemas/UserSchema';
import connectDB from '../../../../middleware/mongodb';

const userLikeHandler = async (request: any, response: any) => {
  const { method } = request;
  switch (method) {
    case 'POST':
      try {
        const requestBody = !!request.body && JSON.parse(request.body);
        const currentUserId = requestBody?.currentUserId;
        const targetUserId = requestBody?.targetUserId;
        if (!!currentUserId && !!targetUserId) {
          const user = await UserSchema.findByIdAndUpdate(currentUserId, {$addToSet: {likes: targetUserId}});
          if (!!user) {
            return response.status(200).json({ success: true });
          }
        } else {
          response.status(400).json({ success: false });
        }
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(400).json({ success: false });
      break;
  }
};

export default connectDB(userLikeHandler);

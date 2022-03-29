import UserSchema from '../schemas/UserSchema';
import { User } from '../models/User';

export const userActionHandler = (fieldName: string) => async (request: any, response: any) => {
  const { method } = request;
  switch (method) {
    case 'POST':
      try {
        const requestBody = !!request.body && JSON.parse(request.body);
        const currentUserId = requestBody?.currentUserId;
        const targetUserId = requestBody?.targetUserId;
        if (!!currentUserId && !!targetUserId) {
          const updateValues: any = {};
          updateValues[fieldName] = targetUserId;
          const user = await UserSchema.findByIdAndUpdate(currentUserId, { $addToSet: updateValues });
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

export const actionHandler = (fieldName: string) => async (request: any, response: any) => {
  const { method, query: { id } } = request;
  switch (method) {
    case 'GET':
      try {
        const user: any = await UserSchema.findById(id);
        if (!!user) {
          const userIds: string[] = user[fieldName] ?? [];
          const userList: User[] = await UserSchema.find({ _id: { $in: userIds }});
          return response.status(200).json({ success: true, data: userList });
        }
        response.status(400).json({ success: false });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(400).json({ success: false })
      break;
  }
};

import { User } from '../../../../models/User';
import UserSchema from '../../../../schemas/UserSchema';
import connectDB from '../../../../middleware/mongodb';

const likeHandler = async (request: any, response: any) => {
    const { method, query: { id } } = request;
    switch (method) {
        case 'GET':
            try {
                const user: User | null = await UserSchema.findById(id);
                if (!!user) {
                    const likeUserIds = user.likes ?? [];
                    const likedUserList: User[] = await UserSchema.find({ _id: { $in: likeUserIds }});
                    return response.status(200).json({ success: true, data: likedUserList });
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

export default connectDB(likeHandler);

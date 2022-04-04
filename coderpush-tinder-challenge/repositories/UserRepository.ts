import { User } from '../models/User';
import UserSchema from '../schemas/UserSchema';
import UserInfoSchema from '../schemas/UserInfoSchema';

export const queryUserWithInfo = async (id: string): Promise<User> => Promise.all([
    UserSchema.findById(id),
    UserInfoSchema.findOne().where('userId').equals(id)
]).then(([user, userInfo]) => {
    return {
        ...user?._doc,
        userInfo
    }
});

import UserSchema from '../../../schemas/UserSchema';
import connectDB from '../../../middleware/Mongodb';

const userDetailHandler = async (request: any, response: any) => {
    const { method, query: { id } } = request;
    switch (method) {
        case 'GET':
            try {
                const user = await UserSchema.findById(id);

                if (!user) {
                    return response.status(400).json({ success: false });
                }

                response.status(200).json({ success: true, data: user });
            } catch (error) {
                response.status(400).json({ success: false });
            }
            break;
        default:
            response.status(400).json({ success: false })
            break;
    }
};

export default connectDB(userDetailHandler);

import connectDB from '../../../../middleware/Mongodb';
import { userActionHandler } from '../../../../utils/HandlerUtils';
import { USER_LIKES_FIELD } from '../../../../constants/SchemaConstants';

const userLikeHandler = userActionHandler(USER_LIKES_FIELD);

export default connectDB(userLikeHandler);

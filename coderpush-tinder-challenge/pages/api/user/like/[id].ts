import connectDB from '../../../../middlewares/Mongodb';
import { actionHandler } from '../../../../utils/HandlerUtils';
import { USER_LIKES_FIELD } from '../../../../constants/SchemaConstants';

const likeHandler = actionHandler(USER_LIKES_FIELD);

export default connectDB(likeHandler);

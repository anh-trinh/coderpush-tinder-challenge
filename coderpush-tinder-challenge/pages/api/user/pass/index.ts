import connectDB from '../../../../middleware/Mongodb';
import { userActionHandler } from '../../../../utils/HandlerUtils';
import { USER_PASSES_FIELD } from '../../../../constants/SchemaConstants';

const userPassHandler = userActionHandler(USER_PASSES_FIELD);

export default connectDB(userPassHandler);

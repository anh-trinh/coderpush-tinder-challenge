import connectDB from '../../../../middlewares/Mongodb';
import { actionHandler } from '../../../../utils/HandlerUtils';
import { USER_PASSES_FIELD } from '../../../../constants/SchemaConstants';

const passHandler = actionHandler(USER_PASSES_FIELD);

export default connectDB(passHandler);

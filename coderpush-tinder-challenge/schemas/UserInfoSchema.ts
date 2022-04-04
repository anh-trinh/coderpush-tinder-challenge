import mongoose from 'mongoose';

const userInfoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.UserInfoSchema ||
  mongoose.model('UserInfoSchema', userInfoSchema);

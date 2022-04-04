import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  likes: [String],
  passes: [String],
});

export default mongoose.models.UserSchema ||
  mongoose.model('UserSchema', userSchema);

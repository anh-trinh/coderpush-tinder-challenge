import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.UserSchema || mongoose.model('UserSchema', userSchema);

import mongoose, { Schema } from 'mongoose';
import validator from 'validator';


const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email',
    }
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required!'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minlength: [6, 'Password need to be longer!'],
    maxlength: [18, 'Password needs to be less than 18 characters'],
    validate: {
      validator(password) {

      },
      message: '[VALUE] is not a valid password!',
    },
  },
});

export default mongoose.model('User', UserSchema)

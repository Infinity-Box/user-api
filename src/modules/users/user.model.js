import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';


import {passwordReg} from './user.validation';
import constants from '../../config/constants';

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
  userName: {
    type: String,
    required: [true, 'UserName is required'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minlength: [6, 'Password need to be longer!'],
    maxlength: [18, 'Password needs to be less than 18 characters'],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!',
    },
  },
}, { timestamps: true });

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compare(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      constants.JWT_SETCRET,
    );
  },
  toJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`
    };
  },
};

export default mongoose.model('User', UserSchema)

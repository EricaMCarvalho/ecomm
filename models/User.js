const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  givenName: {
    type: String,
    required: [true, 'Please add a given name']
  },
  surname: {
    type: String,
    required: [true, 'Please add a surname']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: String,
    maxlength: [11, 'Phone number can not be longer than 11 characters. Format: (XX) X XXXXX-XXXX'],
    required: [true, 'Please add a phone number']
  },
  googleId: String,
  instagramId: String,
  password: {
    type: String,
    minlength: 8,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema);
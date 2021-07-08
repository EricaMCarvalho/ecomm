const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  googleId: String,
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
});

UserSchema.pre('save', async function(next) {
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

UserSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const slugify = require('slugify');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  countInStock: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  slug: String
}, {
  timestamps: true
})

ProductSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
})

module.exports = mongoose.model('Product', ProductSchema);
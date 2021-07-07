const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/database');
const Product = require('./models/Product');
const User = require('./models/User');
const productData = require('./data/products');
const userData = require('./data/users');

connectDB();

const importData = async () => {
  try {
    await Product.create(productData);
    await User.create(userData);
    console.log('Data imported');
    console.log('Disconnecting MongoDB...');
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

const deleteData = async () => {
  try {
    await Product.deleteMany()
    console.log('Data deleted')
    console.log('Disconnecting MongoDB...');
    process.exit()
  } catch (error) {
    console.log(error);
  }
}


if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Argument missing');
  process.exit();
}
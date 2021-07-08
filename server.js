const express = require('express');

const connectDB = require('./config/database');
const passportConfig = require('./config/passport');
const errorHandler = require('./middleware/errorHandler');

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
  app.use(require('morgan')('dev'));
}

connectDB();

passportConfig(app);

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('API is running...'));

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const campaignsRouter = require('./routes/campaigns');

app.use('/users', usersRouter);
app.use('/campaigns', campaignsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
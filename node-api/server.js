const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const conStr = 'mongodb+srv://penta-hacktivist:hacktivist@cluster0.xlxf9b4.mongodb.net/';

mongoose.connect(conStr).then(() => {
  console.log('Connection to mongoose successfully.');

  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));

  const employeeRoutes = require('./routes/employeeRoutes');
  const leaveRequestRoutes = require('./routes/leaveRequestRoutes');

  app.use('/employee', employeeRoutes);
  app.use('/leave-requests', leaveRequestRoutes);

  app.listen(1969, () => {
    console.log('API running on http://localhost:1969/');
  });
});

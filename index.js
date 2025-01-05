const express = require('express');
const dotenv=require('dotenv');
const cors = require('cors');
// const connectWithDb = require('./config/db');
const connectDB=require("./config/db");
// require('dotenv').config();
const app = express();
const { PORT } = process.env;
dotenv.config();
// connect with database
connectDB();
// for swagger documentation
app.use(cors({ origin:"*" ,methods:"GET,POST,PUT,DELETE",credentials:true}));
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use express router
app.use('/', require('./routes'));

app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at ${PORT}`);
});


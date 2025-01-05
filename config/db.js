// const mongoose = require('mongoose');

// const connectWithDb = () => {
//   mongoose
//     .connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(console.log(`DB connected successfully`))
//     .catch((error) => {
//       console.log(`DB connection failed`);
//       console.log(error);
//       process.exit(1);
//     });
// };

// module.exports = connectWithDb

const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });

  await mongoose.connect(`${process.env.DB_URL}`);
};

module.exports = connectDB;
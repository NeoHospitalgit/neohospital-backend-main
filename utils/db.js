const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.error("DataBase Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;

const mongoose = require("mongoose");

DATABASE_URI = "mongodb+srv://admin:Goyal%402525@cluster0.o9aet4s.mongodb.net/College";

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

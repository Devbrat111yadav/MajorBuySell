const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
       "mongodb://localhost:27017/MajorBuySell"// Ensure this matches your MongoDB URI
      )
      .then(() => console.log("🔥 DB Connected Successfully"))
      .catch((err) => console.error("DB Error:", err));
  } catch (err) {
    console.error("DB Error:", err);
  }
};

module.exports = connectDB;
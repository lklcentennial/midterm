const mongoose = require("mongoose");
const StdSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    major: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Std", StdSchema);



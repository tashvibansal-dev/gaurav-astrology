const mongoose = require("mongoose");

const horoscopeSchema = new mongoose.Schema(
  {
    zodiacSign: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    prediction: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Horoscope", horoscopeSchema);

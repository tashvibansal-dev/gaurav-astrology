const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: String,
    birthPlace: String,
    dateOfBirth: String,
    timeOfBirth: String,
    questionText: {
      type: String,
      required: true
    },
    answer: {
      type: String
    },
    answered: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);

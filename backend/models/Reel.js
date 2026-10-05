const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    videoUrl: {
      type: String,
      required: true
    },
    category: {
      type: String
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reel", reelSchema);

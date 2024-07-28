const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema(
  {
    myTask: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task1", TaskScheme);

const mongoose = require("mongoose");
const queryTemplate = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("query", queryTemplate);

const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({
  bikeid: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Bike", BikeSchema);

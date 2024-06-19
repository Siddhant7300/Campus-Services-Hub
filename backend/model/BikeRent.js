const mongoose = require("mongoose");

const BikeRentalSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  numDays: {
    type: Number,
    required: true
  },
  bikeType: {
    type: String,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },bikeid:{
    type: Number,
    required: true
  }
},{timestamps:true});

module.exports = mongoose.model("BikeRent", BikeRentalSchema);

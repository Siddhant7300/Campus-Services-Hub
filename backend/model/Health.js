

const mongoose = require('mongoose');
const healthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  healthConcerns: {
    type: String,
    required: true
  },
  additionalInfo: {
    type: String,
    required: false // Assuming this field is optional
  },
  counselor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Counselor',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the model
module.exports = mongoose.model('Health', healthSchema);

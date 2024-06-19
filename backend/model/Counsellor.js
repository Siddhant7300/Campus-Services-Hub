const mongoose = require('mongoose');

// Define the schema
const counsellorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  // Add other fields as needed, like contact information, qualifications, etc.
  contactInfo: {
    type: String,
    required: false
  },
  qualifications: {
    type: String,
    required: false
  }
});

// Create the model
module.exports = mongoose.model('Counsellor', counsellorSchema);

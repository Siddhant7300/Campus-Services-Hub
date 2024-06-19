const mongoose = require("mongoose");

const WifiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  registrationNo: { type: String, required: true },
  mobileNo: { type: String, required: true },
  block: { type: String, required: true },
  roomNo: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status:{type:String,default:"Pending"},
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'campususer',
    required: true
  },
});

module.exports = mongoose.model("Wifi", WifiSchema);

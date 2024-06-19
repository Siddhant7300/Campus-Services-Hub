const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  services : [],
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'campususer',
    required: true
  },
  roomno :{
    type:Number
  },
  block:{
    type:String
  },
  status:{
    type:"String",
    default:"Pending"
  }
});

module.exports = mongoose.model("Room", RoomSchema);


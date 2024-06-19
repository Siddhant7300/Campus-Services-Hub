const { success, error } = require("../utils/responseWrapper");
const Wifi = require('../model/Wifi');
const Counsellor = require('../model/Counsellor');
const Health = require("../model/Health");
const Room = require('../model/Room');
const BikeRent = require('../model/BikeRent');
const Bike = require('../model/Bike');


async function roomController(req, res){
    try {
        const roomData = await Room.find().populate('userid')
        return res.send(success(201, {roomData}));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}

// roomFixController
async function roomFixController(req, res){
    try {
        const {id} = req.body;
        const roomData = await Room.findById({_id:id})
        roomData.status = "Completed";
        await roomData.save();
        console.log(roomData)
        return res.send(success(201, "Update Successful"));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}

//deleteRoomController
async function deleteRoomController(req, res){
    try {
        const {id} = req.body;
        const roomData = await Room.deleteOne({_id:id})
        return res.send(success(201, "Deleted Successful"));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}

//Wifi controllers
async function wifiController(req, res){
    try {
        const wifiData = await Wifi.find().populate('userid')
        return res.send(success(201, {wifiData}));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}

async function wifiFixController(req, res){
    try {
        const {id} = req.body;
        const wifiData = await Wifi.findById({_id:id})
        wifiData.status = "Completed";
        await wifiData.save();
        console.log(wifiData)
        return res.send(success(201, "Update Successful"));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}

//deleteRoomController
async function deleteWifiController(req, res){
    try {
        const {id} = req.body;
        const wifiData = await Wifi.deleteOne({_id:id})
        return res.send(success(201, "Deleted Successful"));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}


async function WifiController(req, res){
    try {
        const {name, email, registrationNo, mobileNo, block, roomNo, subject, message } = req.body;
        console.log(req.body);
            
        if (!name || !email || !registrationNo ||  !mobileNo || !block || !roomNo || !subject || !message) {
            return res.send(error(400, "All fields are required"));
        }

        const wifi = await Wifi.create({name, email, registrationNo, mobileNo, block, roomNo, subject, message });
        // console.log(wifi);
        return res.send(success(201, "Request Submitted"));
    } catch (e) {
        return res.send(error(400, e.message));
    }
}

async function CounsellorController(req, res){
    try {
        const alldata = await Counsellor.find();
        return res.send(success(201,alldata));
    } catch (e) {
        return res.send(error(400, "Something Went Wrong"));
    }
}

async function HealthController(req, res){
    try {
        console.log(req.body);
        const {name,
            age,
            gender,
            healthConcerns,
            additionalInfo,
            counselor,
            date
            } = req.body;
        const new_data = await Health.create({name,
            age,
            gender,
            healthConcerns,
            additionalInfo,
            counselor,
            date
            });
        return res.send(success(201,"Data Saved successful  "));
    } catch (e) {
        return res.send(error(400, `Something Went Wrong : ${e}`));
    }
}

async function RoomController(req, res){
    try {
        const {arr} = req.body;
        
        const temp_arr = []

        for(var i=0;i <arr.length; i++){
            temp_arr.push({name:arr[i]})
        }
        
        const new_data = await Room.create({services:temp_arr})
        return res.send(success(201,"Data Saved successful"));
    } catch (e) {
        return res.send(error(400, `Something Went Wrong : ${e}`));
    }
}

async function RentController(req, res){
    try {
        const {userid, startDate, numDays, bikeType,totalCost, bikeid} = req.body;
    
        const new_data = await BikeRent.create({userid, startDate, numDays, bikeType,totalCost, bikeid})
        return res.send(success(201,"Data Saved successful"));
    } catch (e) {
        return res.send(error(400, `Something Went Wrong : ${e}`));
    }
}

async function BikeController(req, res){

    try {
        // });

        const alldata = await Bike.find();
        return res.send(success(201,alldata));
    } catch (e) {
        return res.send(error(400, `Something Went Wrong : ${e}`));
    }
}

module.exports = {WifiController, CounsellorController, HealthController, RoomController, RentController, BikeController, roomController,roomFixController, deleteRoomController,wifiController,wifiFixController,deleteWifiController}


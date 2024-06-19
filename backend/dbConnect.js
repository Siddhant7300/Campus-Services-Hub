const { mongoose } = require("mongoose");
module.exports = async () => {
    // const url = "mongodb+srv://Amanpandey:Swlb6UXmN9Sbmt4Q@cluster0.5gsuwse.mongodb.net/?retryWrites=true&w=majority";
    const url = "mongodb://localhost:27017/Campus";
    try {
        await mongoose.connect(url);
        console.log("Connected To Mongo");
    } catch (e) {
        console.log("Unable to Connect to Database : " + e);
        process.exit(1);
    }
};

const mongoose = require('mongoose');

const schema=mongoose.Schema(
    {
        lapTopName:String,
        LaptopImage:String,
        LaptopRAM:String,
        LaptopHD:String,
        LaptopProcessor:String,
        LaptopGraphicsCard:String,
        LapTopPrice:Number,
        id:Number
    }
);
module.exports=mongoose.model("Laptop",schema,"Laptop");
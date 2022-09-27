const mongoose = require('mongoose')
const schema =mongoose.Schema({
    id:Number,
    AirPodName:String,
    Price:Number
}
)
module.exports=mongoose.model("AirPod",schema,"AirPod");
const mongoose=require('mongoose');
const schema =mongoose.Schema({
    BusNo:Number,
    BusName:String
}
)
module.exports=mongoose.model("Bus",schema,"Bus");
const mongoose=require('mongoose')
const schema=mongoose.Schema({
    id:Number,name:String
})
module.exports=mongoose.model("Painter",schema,"painter")
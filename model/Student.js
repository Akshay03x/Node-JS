const mongoose = require('mongoose');
const schema=mongoose.Schema({
        id:Number,
    StudentName:String,
    StudentEmail:String,
    StudentMobile:Number,
    StudentParentMobile:Number,
    StudentImage:String,
    StudentDepartment:String})

module.exports=mongoose.model("Student",schema,"Student");
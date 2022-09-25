const mongoose = require('mongoose');
const schema=mongoose.Schema({
    FacultyName:String,
    FacultyId:String,
    FacultyAge:String
}
);
module.exports=mongoose.model("Faculty",schema,"Faculty")   ;
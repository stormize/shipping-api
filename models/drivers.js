const mongoose = require('mongoose');
const Schema = mongoose.Schema;

geoSchema = new Schema({
 type:{
     type:String,
     default:'Point'
 },
 coordinates:{
     type:[Number],
     index:"2dsphere",
     required:true
 }
});
driverSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    email:{
        unique:true,
        type:String,
        required:true
    },
    pw:{
        type:String,
        required:true
    },
    carNumb:{
        unique:true,
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"free"
    },
    lan:{
        type:String,
        default:'ar'
    },
    location:geoSchema

});

const drivers = mongoose.model('drivers',driverSchema);
module.exports=drivers; 
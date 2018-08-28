const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipSchema= new Schema({
    userName:{
        type:String
    },
    userPhone1:{
        type:Number
    },
    userPhone2:{
        type:Number
    },
    userAddress:{
        type:String
    },
    uerFamousPlace:{
        type:String
    },
    packageType:{
        type:String
    },
    packageSize:{
        type:Number
    },
    notes:{
        type:String
    },
    recieverName:{
        type:String
    },
    recieverPhone1:{
        type:Number
    },
    recieverPhone2:{
        type:Number
    },
    recieverFamousPlace:{
        type:String
    },
    status:{
        type:String
    },
    driver:{
        type:String
    }
});

const ships = mongoose.model('ships',shipSchema);
module.exports=ships;


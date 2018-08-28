const mongoose=require('mongoose');
const Schema = mongoose.Schema;
//create geo schema
const geoSchema = new Schema({
type:{
    type:String,
    default:"point"
},
Coordinates:{
    type:[Number],
    index:"2dsphere"
}
});
//create users schema and model
const userSchema = new Schema({
  name:{
     type:String,
     unique:true
  },
  phone:{
      type:Number,
      unique:true
  },
  email:{
      type:String,
      unique:true
  },
  pw:{
      type:String
  },
  lan:{
      type:String,
      default:'ar'
  },
  geometry:geoSchema

});
const user = mongoose.model('users',userSchema);
module.exports=user;
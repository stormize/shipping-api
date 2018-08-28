mongooe = require('mongoose');
Schema = mongooe.Schema;

complainsSchema = new  Schema({
   userName:{
       type:String
   },
   complain:{
       type:String
   }
});
const complains = mongooe.model('complains',complainsSchema);
module.exports=complains;

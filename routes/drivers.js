const express = require('express');
const joi = require('joi');
const router = express.Router();
const Driver = require('../models/drivers');

router.get('/drivers/near',(req,res)=>{
  const schema={
    lng:joi.number(),
    lat:joi.number()
  }
  const result = joi.validate(req.query,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 Driver.aggregate([
   {
     '$geoNear':{
       'near':{'type':'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
       'spherical':true,
       'distanceField':'dist',
       'maxDistance':1000000
                }
   }
 ],function(err,data){
   res.send(data);
 });
});

//get one driver
router.get('/drivers',(req,res)=>{
  const schema={
    name:joi.string(),
    phone:joi.number()
  }
  const result = joi.validate(req.query,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 Driver.findOne({name:req.query.name,phone:req.query.phone}).then((data=>{
   res.send(data);
 }));
});
//get all drivers

router.get('/drivers/all',(req,res)=>{
  Driver.findOne().then((data=>{
    res.send(data);
  }));
 });

 //insert driver to db
router.post('/drivers',(req,res)=>{
  const schema={
    name:joi.string().required(),
    phone:joi.number().required(),
    email:joi.string().email({ minDomainAtoms: 2 }).required(),
    pw:joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    carNumb:joi.string().required(),
    status:joi.string(),
    location:joi.object().keys({
      type:joi.string().required(),
      coordinates:joi.number().required()
    }).required()
  }
  const result = joi.validate(req.body,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 Driver.create(req.body).then(function(data){
     res.send(data);
 });
});

//update driver data
router.put('/drivers/:id',(req,res)=>{
  const schema={
    name:joi.string(),
    phone:joi.number(),
    email:joi.string().email({ minDomainAtoms: 2 }),
    pw:joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    carNumb:joi.string(),
    status:joi.string(),
    location:joi.object().keys({
      type:joi.string(),
      coordinates:joi.number()
    })
  }
  const result = joi.validate(req.body,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 Driver.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
   Driver.findOne({_id:req.params.id}).then((data)=>{
    res.send(data);
   });
 });
});
//delete driver data
router.delete('/drivers/:id',(req,res)=>{
Driver.findOneAndRemove({_id:req.params.id}).then((data)=>res.send(data))
});

module.exports=router;
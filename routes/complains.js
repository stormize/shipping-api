const express = require('express');
const joi = require('joi');
const router=express.Router();
const Complain= require('../models/complains');

router.get('/complains',(req,res)=>{
  const schema={
    userName:joi.string().required(),
    
  }
  const result = joi.validate(req.query,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 Complain.find({userName:req.query.userName}).then((complains)=>{
   res.send(complains);
 })
});
router.get('/complains/all',(req,res)=>{
  Complain.find().then((complains)=>{
    res.send(complains);
  })
 });
router.post('/complains',(req,res)=>{
  const schema={
    userName:joi.string().required(),
    complain:joi.string().required()
    
  }
  const result = joi.validate(req.body,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 Complain.create(req.body).then(function(data){
   res.send(data);
 });
});
router.put('/complains/:id',(req,res)=>{
  const schema={
    userName:joi.string(),
    complain:joi.string()
    
  }
  const result = joi.validate(req.body,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
Complain.findByIdAndUpdate({_id:req.params.id},req.body).then((complain)=>{
 Complain.findOne({_id:req.params.id}).then((data)=>{
  res.send(data);
 });
});
});
router.delete('/complains/:id',(req,res)=>{
 Complain.findByIdAndDelete({_id:req.params.id}).then((data)=>{
   res.send(data);
 })
});

module.exports=router;

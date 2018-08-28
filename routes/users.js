const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/users',(req,res)=>{
  const schema={
    name:joi.string(),
    phone:joi.number()
  }
  const result = joi.validate(req.query,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 User.findOne({name:req.query.name,phone:req.query.phone}).then((user)=>{
   res.send(user);
 });
});
router.get('/users/all',(req,res)=>{
  User.find().then((user)=>{
    res.send(user);
  });
 });
router.post('/users',(req,res)=>{
  const schema={
    name:joi.string().required(),
    phone:joi.number().required(),
    email:joi.string().email({ minDomainAtoms: 2 }).required(),
    pw:joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    lan:joi.string().max(3)
  }
  const result = joi.validate(req.body,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
 User.create(req.body).then(function(data){
     res.send(data);
 });
});
router.put('/users/:id',(req,res)=>{
  const schema={
    name:joi.string(),
    phone:joi.number(),
    email:joi.string().email({ minDomainAtoms: 2 }),
    pw:joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    lan:joi.string().max(3)
  }
  const result = joi.validate(req.body,schema);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
  }
User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(data){
 User.findOne({_id:req.params.id}).then(function(data){
   res.send(data);
 });
});
});
router.delete('/users/:id',(req,res)=>{
 User.findByIdAndRemove({_id:req.params.id}).then(function(data){
 res.send(data);
 });
});


module.exports=router;
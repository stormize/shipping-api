const express = require('express');
const joi = require('joi');
const router = express.Router();
const Ship = require('../models/ships');

router.get('/ships',(req,res)=>{
 Ship.find({}).then((ships)=>{
     res.send(ships);
 })
});
router.get('/ships/byUser',(req,res)=>{
    const schema={
        userName:joi.string().required()
      }
      const result = joi.validate(req.query,schema);
      if(result.error){
        res.status(400).send(result.error.details[0].message);
      }
    Ship.find({userName:req.query.userName}).then((ships)=>{
        res.send(ships);
    })
   });
router.get('/ships/byDriver',(req,res)=>{
    const schema={
        driver:joi.string().required()
      }
      const result = joi.validate(req.query,schema);
      if(result.error){
        res.status(400).send(result.error.details[0].message);
      }
    Ship.find({driver:req.query.driver}).then((ships)=>{
        res.send(ships);
    })
   });

router.post('/ships',(req,res)=>{
    const schema={
        userName:joi.string().required(),
        phone1:joi.number().required(),
        phone2:joi.number().required(),
        famousPlace:joi.string().required(),
        userAddress:joi.string().required(),
        packageType:joi.string().required(),
        packageSize:joi.number().required(),
        notes:joi.string(),
        recieverName:joi.string().required(),
        recieverphone1:joi.number().required(),
        recieverphone2:joi.number().required(),
        status:joi.string().required(),
        driver:joi.string()

        
      }
      const result = joi.validate(req.body,schema);
      if(result.error){
        res.status(400).send(result.error.details[0].message);
      }
 Ship.create(req.body).then(function(data){
     res.send(data);
 });
});
router.put('/ships/:id',(req,res)=>{
    const schema={
        userName:joi.string(),
        phone1:joi.number(),
        phone2:joi.number(),
        famousPlace:joi.string(),
        userAddress:joi.string(),
        packageType:joi.string(),
        packageSize:joi.number(),
        notes:joi.string(),
        recieverName:joi.string(),
        recieverphone1:joi.number(),
        recieverphone2:joi.number(),
        status:joi.string(),
        driver:joi.string()

        
      }
      const result = joi.validate(req.body,schema);
      if(result.error){
        res.status(400).send(result.error.details[0].message);
      }
 Ship.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
    Ship.findOne({_id:req.params.id},{name:req.body.name}).then((data)=>res.send(data));
 });
});
router.delete('/ships/:id',(req,res)=>{
 Ship.findByIdAndRemove({_id:req.params.id}).then((data)=>res.send(data));
});

module.exports=router;
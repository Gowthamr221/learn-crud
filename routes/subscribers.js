const express = require('express')
const router =express.Router()
const Subscriber = require("../models/subscriber")
// Getting all
router.get('/',async (req,res)=>{
    try{
        const subcribers = await Subscriber.find({})
        res.json(subcribers)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})
// Getting one
router.get('/:id',(req,res)=>{
    res.send(`the value is: ${req.params.id}`)
})
// creating one
router.post('/',async (req,res)=>{
    const subscriber = new Subscriber({
        name : req.body.name,
        subscribedToChannel:req.body.subscribedToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})
// updating one
router.patch('/',(req,res)=>{
    
})
// deleting one
router.delete('/',(req,res)=>{
    
})

module.exports = router
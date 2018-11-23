const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Part = require('../models/spare-part');

router.get('/', function(req, res){
    Part.find({}, function(err, parts){
        if(err){
            console.log(err);
        }else{
            res.json(parts);     
        }
    });
});

router.post('/', function(req, res){
    let {name, location, container_number, additional_info, amount} = req.body;
    let newPart = {_id: new mongoose.Types.ObjectId(), name, location, container_number, additional_info, amount};
    Part.create(newPart, function(err, part){
        if(err) console.log(err);
        else {
            res.json(part);
        }
    })
});

module.exports = router;
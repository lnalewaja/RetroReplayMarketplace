const model = require('../models/item');   

exports.index = (req,res)=>{
    // res.send('Items page');
    let items = model.find();
    res.render('./item/index.ejs', {items});
};

exports.new = (req,res)=>{
    res.send('send the new item');
};

exports.create = (req,res)=>{
    res.send('Created a new story');
};

exports.show = (req,res)=>{
    res.send('Send story with id ' + req.params.id);
};

exports.edit = (req,res)=>{
    res.send('send the edit item form');
};

exports.update = (req,res)=>{
    res.send('Update story with id ' + req.params.id);
};

exports.delete = (req,res)=>{
    res.send('Delete story with id ' + req.params.id);
};
const model = require('../models/item');   

exports.index = (req,res, next)=>{
    let items;
    if (req.query.search) {
        items = model.search(req.query.search);
        if (items.length !== 0) {
            res.render('./item/index.ejs', {items});
        } else {
            let err = new Error('Listing not found');
            err.status = 404;
            next(err);
        }    
    } else {
        items = model.find();
        res.render('./item/index.ejs', {items});
    }
};

exports.new = (req,res)=>{
    res.render('./item/new.ejs');
};

exports.search = (req, res) => {
    let searched = req.params.item; 
    console.log('Hello');
    console.log(searched);
    let items = model.search(searched);
    res.render('./item/index.ejs', {items});
}

exports.create = (req,res)=>{
    let item = req.body;
    model.save(item);
    res.redirect('/items');
};

exports.show = (req,res,next)=>{
    let id = req.params.id;
    let item = model.findById(id);
    if (item) {
        res.render('./item/show.ejs', {item});
    } else {
        let err = new Error('Cannot find listing with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req,res,next)=>{
    let id = req.params.id;
    let item = model.findById(id);
    if (item) {
        res.render('./item/edit', {item});
    } else {
        let err = new Error('Cannot find listing with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req,res,next)=>{
    let item = req.body;
    let id = req.params.id
    if (model.updateById(id, item)) {
        res.redirect('/items/' + id);
    } else {
        let err = new Error('Cannot find listing with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req,res,next)=>{
    let id = req.params.id;
    console.log(id);
    if (model.deleteByID(id)) {
        res.redirect('/items');
    } else {
        let err = new Error('Cannot find listing with id ' + id);
        err.status = 404;
        next(err);
    }
};
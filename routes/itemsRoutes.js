const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemsController');


// GET -> /items : sent all items
router.get('/', controller.index);

router.get('/search=', controller.search);

// GET -> /items/new
router.get('/new', controller.new);

// POST -> /items : create a new item
router.post('/', controller.create);

// GET -> /items/:id : send details of item identified by id
router.get('/:id', controller.show);

// GET -> /items/:id/edit : send html form for editing an existing item
router.get('/:id/edit', controller.edit);

// PUT -> /items/:id : update the item identified by the id
router.put('/:id', controller.update);

// DELETE -> /items/:id : Deletes item
router.delete('/:id', controller.delete);

module.exports = router;
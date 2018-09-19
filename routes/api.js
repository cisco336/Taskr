const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

// GET
router.get('/to-do', (req, res, next) => {
    var query = req.query.arg;
    if (typeof query == "string") {
      if ((query == 'true') || (query == 'false')) {
        var theQuery = {completed: req.query.arg};
      } else {
        var theQuery = {priority: req.query.arg};
      }
        Task.find(theQuery).then(task => {
            res.send(task);
        }).catch(next);
    } else {
      Task.find({})
          .then(task => {
            res.send(task);
          })
          .catch(next);
    }
});
// POST
router.post('/to-do', (req, res, next) => {
    Task.create(req.body).then(function(task){
         res.send(task);
     }).catch(next);
});
// PUT
router.put('/to-do/:id', (req, res, next) => {
    Task.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Task.findOne({ _id: req.params.id }).then(function(task){
            res.send(task);
        });
    }).catch(next);
});

// DELETE
router.delete('/to-do/:id', function(req, res,next){
    Task.findByIdAndRemove({ _id: req.params.id }).then(function(task){
        res.send(task + ' Deleted...');
    }).catch(next);
});

// Export
module.exports = router;
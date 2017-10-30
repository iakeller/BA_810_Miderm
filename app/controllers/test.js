var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = mongoose.model('test');

module.exports = function (app, config) {
    app.use('/api', router);

 router.post('/users', function (req, res, next) {
        console.log('Create User', 'verbose');
        var user = new Test(req.body);
        user.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
           return next(err);
        });
      })
  
router.get('/user', function (req, res, next) {
        console.log('Get Users', 'verbose');
        var query = Test.find()
          .sort(req.query.order)
          .exec()
          .then(result => {
               if(result && result.length) {
              res.status(200).json(result);
          } else {
              res.status(404).json({message: "No users"});
          }
          })
          .catch(err => {
            return next(err);
          });
     // })

// router.get('/users/:userId', function(req, res, next){
//         console.log('Get user ' + req.params.userId, 'verbose');
//         Test.findById(req.params.userId)
//                     .then(user => {
//                         if(user){
//                             res.status(200).json(user);
//                         } else {
//                             res.status(404).json({message: "No user found"});
//                         }
//                     })
//                     .catch(error => {
//                         return next(error);
//                     });
//             }); 

        // router.put('/users/:userId', function(req, res, next){
        //     console.log('Update user ' + req.params.userId, 'verbose');
        //    Test.findOneAndUpdate({_id: req.params.userId}, 		req.body, {new:true, multi:false})
        //             .then(user => {
        //                 res.status(200).json(user);
        //             })
        //             .catch(error => {
        //                 return next(error);
        //             });
        //     }); 
            
// router.delete('/users/:userId', function(req, res, next){
//                 console.log('Delete user ' + req.params.userId, 'verbose');
//                Test.remove({ _id: req.params.userId })
//                         .then(user => {
//                             res.status(200).json({msg:"User Deleted"});
//                         })
//                         .catch(error => {
//                             return next(error);
//                         });
//                 });
                  
//	};


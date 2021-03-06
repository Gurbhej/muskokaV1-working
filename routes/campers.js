var express = require('express');
var router = express.Router();


// reference this model for CRUDNESS
let Camper = require('../models/camper');


/* GET staff-camper-profiles page. */
router.get('/staff-camper-profiles', function(req, res, next) {

    Camper.find(function(err, queryResults){
        if (err){
            console.log(err);
            res.end(err);
            return;
        }
        else{
            console.log(queryResults);
            res.render('staff-camper-profiles', {
                camper: queryResults,
                title:'Camper Profile'
            });
        }
    });
});


// new require('mongodb').ObjectID(req.params.id)

/* GET single camper profile page. */
router.get('/single-camper-profile', function(req, res, next) {

    Camper.find(function(err, queryResults){
        if (err){
            console.log(err);
            res.end(err);
            return;
        }
        else{
            console.log(queryResults);
            res.render('single-camper-profile', {
                camper: queryResults,
                title:'Camper Profile'
            });
        }
    });
});


//add camper
router.get('/add-camper', function(req, res, next){
    res.render('add-camper', { title:'Add camper'});
});


/// POST /add-camper
router.post('/add-camper', function(req, res, next) {
    // use the camper model to add a new camper to mongodb
    Camper.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    },function(err) {
        if (err) {
            console.log(err);
            res.render('error');
            return;
        }
        res.redirect('camp-detail');
    });
});



/* GET camp-detail page. */
router.get('/camp-detail', function(req, res, next) {

    Camper.find(function(err, queryResults){
        if (err){
            console.log(err);
            res.end(err);
            return;
        }
        else{
            console.log(queryResults);
            res.render('camp-detail', {
                Camper: queryResults,
                title:'Camp detail'
            });
        }
    });
});



// make public
module.exports = router;

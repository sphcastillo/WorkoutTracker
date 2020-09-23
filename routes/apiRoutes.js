const workout = require("../models/workout.js");

module.exports = function(app){
    
    app.get("/api/workouts", (req,res) => {
        workout.find({}, (err,data) => {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        })
        
    })

    app.get("/api/workouts/range", (req,res) => {
        workout.find({}, (err,data) => {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        })
        
    })


    app.post("/api/workouts", ({body}, res) => {
        workout.create({}, (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        })
    })


    app.put("/api/workouts/:id", (req, res) => {
        workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        })
    })


}
const db = require("../models");
const Workout = db.Workout;

module.exports = function (app){
    //create workouts
    app.post("/api/workouts", ({body}, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.join(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    //add workouts
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body }
        })
        .then(dbWorkout => {
            res.join(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    
    //retrieve workouts
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.join(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
};
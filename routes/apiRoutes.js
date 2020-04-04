// Routes for API

const router = require("express").Router()
const Fitness = require("../models/fitness.js")


router.post("/api/workouts", ( req, res) => {
    Fitness.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params}, res)=> {
      Fitness.findByIdAndUpdate(
          params.id,
          {$push: {exercises: body}

          },
          {
              new: true, runValidators: true
          }
      )
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err=> {
          res.json(err)
      })
  })

  router.get ("/api/workouts", (req,res) => {
      Fitness.find()
      .then(dbWorkouts => {
          res.json(dbWorkouts);
      })
      .catch(err => {
          res.json(err)
      })
  })

  router.get("/api/workouts/range", (req, res) => {
      Fitness.find({}).limit(9)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err)
        })
  })

  router.delete("/api/workouts", ({ body },res)=> {
      Fitness.findByIdAndDelete(body.id)
      .then(()=> {
        res.json(true);
      })
      .catch (err => {
          res.json(err)
      })
  })

  module.exports = router
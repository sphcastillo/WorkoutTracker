const mongoose = require("mongoose");

const {Schema} = mongoose;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [
      {
        type: {
            type: String
        },
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
      }
    ] 
  })

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
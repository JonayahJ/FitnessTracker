const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
  day: {type: Date, default: Date.now},
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter a valid workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter a valid workout name"
      },
      duration: {
        type: Number,
        required: "Please enter the duration in seconds"
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    
      // if cardio
      distance: {
        type: Number,
      }
      
    }
  ]
}
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
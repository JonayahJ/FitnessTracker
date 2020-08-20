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
      },
    },
  ],
},
{
  toJSON: {
    // we include virtuals because the mongoose doesn't inlcude virtual properties, we would have to specify the inclusion for json data.
    virtuals: true,
  },
}
);
// adds a virtual(calculated property) field to the schema
workoutSchema.virtual("totalWeight").get(function () {
// adding the total weight of the exercises together
return this.weight * this.reps * this.sets;
});
// adds a virtual( calculated property) field to schema
workoutSchema.virtual("totalDuration").get(function () {
// the reduce method executes a reducer function(that you provide) on each element of the array, resulting in single output value.
return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration;
}, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
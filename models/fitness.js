const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an excercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter an exercise duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    })

fitnessSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness
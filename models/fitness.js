const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise Type"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise Name"
        },
        duration: {
            type: Number,
            required: "Exercise Duration In Minutes"
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
    }
);

fitnessSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;
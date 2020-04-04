const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        excercises: [
            {
                type:{
                    type:String,
                    trim:true,
                    required:"Enter an excercise type"
                }
            }
        ]
    }
)
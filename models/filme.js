import mongoose, { Schema } from "mongoose";


const FilmeSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
})

export const Filme = mongoose.model("Filme", FilmeSchema)

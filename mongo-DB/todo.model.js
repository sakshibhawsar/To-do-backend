import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({ 
    title: {
        type: String,
    },
    description: {
        type: String
    } // this is the schema for the todo model
}, {
    timestamps: true // this will add created_at and updated_at timestamps
})

export const todo = mongoose.model("todo", todoSchema)
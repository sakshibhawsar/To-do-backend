import { todo } from "../mongo-DB/todo.model.js"

const getAll = async (req, res) => {
    let todos = await todo.find()
    if(todos){
        res.status(200).json(todos)
    }
    else{
        res.json(400).send("No todos found")
    }
}

const create = async (req, res) => {
    let todoModel = new todo(req.body)
    let result = await todoModel.save()
    if(result){
        res.status(201).json(result)
    }
    else{
        res.status(400).send("Failed to create todo")
    }
}

const findById = async (req, res) => { 
    let id = req.params.id
    let result = await todo.findById(id)
    if(result){
        res.status(200).json(result)
    }
    else{
        res.status(400).send("Todo not found")
    }
} // this is the controller function

const update = async (req, res) => {
    let id = req.params.id
    try{
        let updatedtodo = await todo.findByIdAndUpdate(id,req.body, {new: true})
        if(updatedtodo){
            res.status(200).json("Todo updated successfully", updatedtodo)
        }
        else{
            res.status(400).send("Failed to update todo")
        }
    } catch(err){
        console.log("Error", err)
    }
} // this is the controller function

const remove = async (req, res) => {
    let id = req.params.id
    try{
        await todo.findByIdAndDelete(id)
        res.send("Todo deleted successfully")
    } catch(err){
        res.status(400).send("Failed to delete todo")
    }
}

export default {getAll, create, update, remove, findById}
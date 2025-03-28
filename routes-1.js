import express, {json} from "express"
import { todo } from "./mongo-DB/todo.model.js"
import todoController from "./controller/todoController.js"

let routes = express.Router() // this is the middleware
var Todo1 = []

routes.route("") 
.get(todoController.getAll)
.post(todoController.create)

routes.route("/:id")
.get(todoController.findById)
.put(todoController.update)
.delete(todoController.remove) //this is removing the todo

export default routes
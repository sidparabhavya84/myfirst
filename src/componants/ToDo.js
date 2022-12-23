import React, { useEffect, useState } from "react";
import './Todo.css'


function Todo(){
    const [todos,setTodos] = useState([])
    const [todo,setTodo] = useState("")
    const [todoEditing,setTodoEditing] = useState(null)

    function handleSubmit(e){
        e.preventDefault()

        const newTodo ={
            id: new Date().getTime(),
            text: todo,
            completed:false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    function deleteTodo(id) {
        const updatedTodos = [... todos].filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })    
        setTodos(updatedTodos)
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h2>Add Item... </h2>
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} name="name"/>
                <br/>
                <br/>
                <button type="submit" className="sub">Add Todo</button>
            </form>
            {todos.map((todo) => <div key={todo.id}>
                <div className="ans">{todo.text}</div> 
                <button onClick={() => deleteTodo(todo.id)} className="del">Delete</button>
                
            </div>)}
            <button className="clear">CLEAR ALL</button>
        </div>
    );

}


export default Todo;
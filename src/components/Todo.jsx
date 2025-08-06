import { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import ToDoItems from './ToDoItems'

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")?
    JSON.parse(localStorage.getItem("todos")):[]);
    const inputRef = useRef()
    const add = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        console.log(inputText);
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodoList((prev)=> [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prevTodo) =>{
            return prevTodo.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) =>{
        setTodoList((prvTodos) =>{
            return prvTodos.map((todo) =>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])

  return (
    <div className="bg-pink-100 place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl">

        {/*Title*/}
      <div className="flex items-center mt-7 gap-2">
        <img className='w-8' src={todo_icon} alt="todo"></img>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

        {/*Input box*/}
        <div className='flex items-center my-7 bg-pink-50 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none
            flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your text'></input>
            <button onClick={add} className='border-none rounded-full bg-pink-300 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-pink-400'>
            Add</button>
        </div>

        {/*todo list*/}
        <div>
        {todoList.map((item, index) =>{
            return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete}
            deleteTodo={deleteTodo} toggle ={toggle}></ToDoItems>
        })}
        </div>
    </div>
  )
}

export default Todo

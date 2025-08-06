import todo_icon from '../assets/todo_icon.png'
import ToDoItems from './ToDoItems'

const Todo = () => {
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
            <input className='bg-transparent border-0 outline-none
            flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your text'></input>
            <button className='border-none rounded-full bg-pink-300 w-32 h-14 text-white text-lg font-medium cursor-pointer'>
            Add</button>
        </div>

        {/*todo list*/}
        <div>
            <ToDoItems/>
        </div>
    </div>
  )
}

export default Todo

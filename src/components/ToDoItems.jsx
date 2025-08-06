import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const ToDoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center'>
        <img src={isComplete ? tick : not_tick} alt="tick"/>
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img onClick={()=>{deleteTodo(id)}} className='w-5 cursor-pointer' src={delete_icon} alt="delete" />
    </div>
  )
}

export default ToDoItems

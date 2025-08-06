import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const ToDoItems = () => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className='flex flex-1 items-center'>
        <img src={tick} alt="tick"/>
        <p>Learning Coding</p>
      </div>
    </div>
  )
}

export default ToDoItems

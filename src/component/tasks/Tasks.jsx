import './tasks.css'
import Task from '../task/Task';

export default function Tasks({taskList}) {
    return (
        <div>
           {taskList.map((task)=>{
               return (<Task key={task.id} task={task} />)
           })}
        </div>
    )
}

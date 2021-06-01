import './task.css';

export default function Task({task}) {
    return (
        <div className={`task ${!task.reminder && 'reminder'}`}>
            {task.text}<br/>
            {task.day}
            <button style={{float:'right', mouse:'pointer'}}>X</button>
        </div>
    )
}

import './todolist.css'
import {useState, useEffect} from 'react';
import Loader from "react-loader-spinner";
import Tasks from '../tasks/Tasks';

export default function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    useEffect(()=>{
        const getTask = async () =>{
            const allTaskList = await fetchTasks();
            setTaskList(allTaskList);
            setShowLoader(false);
        }
        getTask();
    },[]);
    const fetchTasks = async () => {
        setShowLoader(true);
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
      }
    console.log(taskList);
    return (
        <div className="container">
           <h2>Todo list</h2>
           {showLoader && <Loader
                            style={{marginTop: '0px'}} 
                            type="ThreeDots" 
                            color="#00BFFF" 
                            height={80} 
                            width={80} />}
           {taskList.length > 0 && <Tasks taskList={taskList}/>}
        </div>
    )
}

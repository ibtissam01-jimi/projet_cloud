import React, { useState, useEffect } from "react";
import axios from 'axios'

const Tasks = () => {

    const projectId='67e00ef13a56daea143dcad0';
    const BACKEND_URL = 'http://localhost:5409/tasks';
    
    const [tasks, setTasks] = useState([]);
    const [counter,setCounter] = useState(0);
      
      useEffect(()=>{
        const fetchTasks = async()=>{

          const response = await axios.get(BACKEND_URL);
          setTasks(response.data.data)
          setCounter(counter+1)
         }
         fetchTasks();
      },[])
      useEffect(() => {
        console.log(tasks);
        console.log(counter)
        }, [tasks]);
  return (
    <div>
      {tasks.length >0 ? tasks.map((task)=>(
        <div key={task.id}>
          <h2>{task.titre}</h2>
        </div>
      )): <h2>there is no tasks</h2>}
    </div>
  )
}

export default Tasks
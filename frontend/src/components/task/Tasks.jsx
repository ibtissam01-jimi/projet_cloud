import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Tasks = () => {
  const {id} = useParams();
    
    const [tasks, setTasks] = useState([]);
    const [counter,setCounter] = useState(0);
      
    useEffect(()=>{
        const fetchTasks = async()=>{
          const response = await axios.get(`http://localhost:5409/projects/${id}/tasks`);
          setTasks(response.data.tasks)
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
        <div key={task._id}>
          <h2>{task.titre}</h2>
        </div>
      )): <h2>Loading...</h2>}
    </div>
  )
}

export default Tasks
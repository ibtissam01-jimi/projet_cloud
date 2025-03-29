import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Tasks = () => {
  const { id } = useParams();

  const [isInfos, setIsInfo] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [dropIndicator, setDropIndicator] = useState('');


  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`http://localhost:5409/projects/${id}/tasks`);
      setTasks(response.data.tasks)

    }
    fetchTasks();
  }, [])
  const enCoursTasks = tasks.filter((task) => task.status === "En cours");
  const enAttenteTasks = tasks.filter((task) => task.status === "En attente");
  const termineTasks = tasks.filter((task) => task.status === "Terminé");


  const viewDetails = (id) => {
    if (selectedId === id) {
      setIsInfo((prev) => !prev)
    } else {
      setSelectedId(id)
      setIsInfo(true);
    }
  }

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId)
  }
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  }

  const handleOnDrop = async(e, newStatus) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData('taskId');
    const response = await axios.patch(`http://localhost:5409/tasks/${taskId}`,{
      newStatus:newStatus
    })
    if(response.status===200){
      console.log('updated')
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
    )
  );
}else{
  alert('can not be changed')
}
  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <h2>ajouter une Tache</h2> */}
      <div className="grid grid-cols-3 gap-5">
        <div onDrop={(e) => handleOnDrop(e, "En attente")} onDragOver={(e) => handleOnDragOver(e)} className="width-1/3 border border-1 border-gray-400 p-5">
          <h2 className="text-3xl text-bold mb-3">En Attente De Réaliser</h2>

          {enAttenteTasks.length > 0 ? enAttenteTasks.map((task) => (
            // one Task Item
            <div key={task._id} draggable='true'
              onDragStart={(e) => handleDragStart(e, task._id)}
              onDragEnd={(e) => handleDragEnd(e)}
              className="border border-1 rounded-xl border-dashed cursor-pointer mb-3 p-3 active:cursor-grabbing" onClick={() => viewDetails(task._id)}>
              {/* main infos */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-2xl font-bold">{task.titre}</p>
                <button className="bg-blue-700 text-black font-bold">{task.priorite}</button>
              </div>

              {/* Details */}
              {isInfos && selectedId == task._id && (
                <div className="">
                  <p> <span className="font-bold">description :</span>{task.description}</p>
                  <p> <span className="font-bold">deadline :</span>{task.deadline}</p>
                  <p> <span className="font-bold">status :</span>{task.status}</p>
                </div>
              )}
            </div>

          )) : <p>il Exist Pas De Tâches En Attente</p>}
        </div>

        <div onDrop={(e) => handleOnDrop(e, "En cours")} onDragOver={(e) => handleOnDragOver(e)} className="width-1/3 border border-1 border-gray-400 p-5">
          <h2 className="text-3xl text-bold mb-3">Travail En Cours</h2>


          {enCoursTasks.length > 0 ? enCoursTasks.map((task) => (
            // one Task Item
            <div key={task._id} draggable='true'
              onDragStart={(e) => handleDragStart(e, task._id)}
              onDragEnd={(e) => handleDragEnd(e)}
              className="border border-1 rounded-xl border-dashed cursor-pointer mb-3 p-3" onClick={() => viewDetails(task._id)}>
              {/* main infos */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-2xl font-bold">{task.titre}</p>
                <button className="bg-blue-700 text-black font-bold">{task.priorite}</button>
              </div>

              {/* Details */}
              {isInfos && selectedId == task._id && (
                <div className="">
                  <p> <span className="font-bold">description :</span>{task.description}</p>
                  <p> <span className="font-bold">deadline :</span>{task.deadline}</p>
                  <p> <span className="font-bold">status :</span>{task.status}</p>
                </div>
              )}
            </div>

          )) : <p>il Exist Pas De Tâches En Attente</p>}
        </div>

        <div onDrop={(e) => handleOnDrop(e, "Terminé")} onDragOver={handleOnDragOver} className="width-1/3 border border-1 border-gray-400 p-5">
          <h2 className="text-3xl text-bold mb-3">Travail realisé</h2>
          {termineTasks.length > 0 ? termineTasks.map((task) => (
            // one Task Item
            <div key={task._id} draggable='true'
              onDragStart={(e) => handleDragStart(e, task._id)}
              onDragEnd={(e) => handleDragEnd(e)} className="border border-1 rounded-xl border-dashed cursor-pointer mb-3 p-3" onClick={() => viewDetails(task._id)}>
              {/* main infos */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-2xl font-bold">{task.titre}</p>
                <button className="bg-blue-700 text-black font-bold">{task.priorite}</button>
              </div>

              {/* Details */}
              {isInfos && selectedId == task._id && (
                <div className="">
                  <p> <span className="font-bold">description :</span>{task.description}</p>
                  <p> <span className="font-bold">deadline :</span>{task.deadline}</p>
                  <p> <span className="font-bold">status :</span>{task.status}</p>
                </div>
              )}
            </div>

          )) : <p>il Exist Pas De Tâches En Attente</p>}
        </div>


      </div >
    </>
  )
}

export default Tasks
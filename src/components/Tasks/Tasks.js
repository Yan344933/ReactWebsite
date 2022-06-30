import Header from "./Header";
import { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import './Tasks.css'


const Tasks = () =>  {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2, 
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]);

//Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

  // Delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ? {
        ...task, reminder: !task.reminder
      } : task
    ))
  }

  return (
    <div className='col-12 Tasks'>
      <Header  onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <div className="container col-7 justify-content-center">
        {showAddTask && <AddTask onAdd={addTask} />}
      
        {tasks.length > 0 
        ? (
          <div> {tasks.map((task) => (
              <Task key={task.id} task={task} deleteTask={deleteTask} onToggle={toggleReminder}/>))}
          </div>
        )
        : ('No Tasks to Show') }
      </div>
    </div>
  );
}

export default Tasks;

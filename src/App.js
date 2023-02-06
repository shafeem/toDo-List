import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddTaskForm from './components/AddTaskForm'
import ToDo from './components/ToDo'
import UpdateForm from './components/UpdateForm'

import './App.css'
import { getByTestId } from '@testing-library/react'

function App() {
  // for tasks of todo list
  const [toDo, setToDo] = useState([
    { id: 1, title: 'task1', status: false },
    { id: 2, title: 'task2', status: false },
  ])
  // Temp state
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  // add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }
  // deleteTask
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id)
    setToDo(newTask)
  }
  // markDone
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status }
      }
      return task
    })
    setToDo(newTask)
  }
  const cancelUpdate = () => {
    setUpdateData('')
  }
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setUpdateData(newEntry)
  }
  const updateTask = (id) => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id)

    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject)
    setUpdateData('')
  }

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List</h2>
      <br />
      <br />

      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Displaying todos */}

      {toDo && toDo.length ? '' : 'No Tasks...'}

      <ToDo
        deleteTask={deleteTask}
        markDone={markDone}
        setUpdateData={setUpdateData}
        toDo={toDo}
      />
    </div>
  )
}

export default App

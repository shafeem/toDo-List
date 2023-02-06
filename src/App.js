import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {



// for tasks of todo list
const [toDo,setToDo] = useState([
  {id:1,title:'task1',status:false},
  {id:2,title:'task2',status:false}
])
// Temp state
const [newTask,setNewTask] = useState('');
const [updateData,setUpdateData] = useState('');

// add task
const addTask = ()=>{
  if (newTask) {
    let num = toDo.length + 1
    let newEntry={id:num,title:newTask,status:false}
    setToDo([...toDo,newEntry])
    setNewTask('')
  }
}
// deleteTask
const deleteTask = (id)=>{
  let newTask= toDo.filter(task =>task.id !== id)
  setToDo(newTask)
}
// markDone
const markDone = (id)=>{
  let newTask= toDo.map(task =>{
    if(task.id === id){
      return ({ ...task,status: !task.status})
    }
    return task;
  })
  setToDo(newTask);
}


return (
  <div className='container App'>

  <br /><br />
  <h2>To Do List</h2>
  <br /><br />

  {/* add task */}
  <div className='row'>
    <div className='col'>
      <input 
      value={newTask}
      onChange={(e)=>setNewTask(e.target.value)}
      className='form-control form-control-lg' 
      placeholder='Type Here...'/>
    </div>
    <div className='col-auto'>
      <button
      onClick={addTask}
      className='btn btn-lg addbtn '>Add
      </button>
    </div>
  </div>
<br />
    {/* Displaying todos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    {toDo && toDo
     .sort((a,b)=> a.id > b.id ? 1 : -1)
     .map((task,index)=>{
      return(

        <React.Fragment key={task.id}>
          <div className='col taskBg'>
            <div className={task.status ? 'done' : ''}>
            <span className='taskNumber'>{index +1}</span>
            <span className='taskText'>{task.title}</span>
            </div>
            <div className='iconsWrap'>
              <span
              onClick={(e)=>markDone(task.id)}
              title='Compleated /not Compleated'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span
              onClick={()=>deleteTask(task.id)}
              title='Delete'>
              <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>

      </React.Fragment>
      )
     })}
  </div>
)











}

export default App;

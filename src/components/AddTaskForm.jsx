const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* add task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Type Here..."
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg addbtn ">
            Add
          </button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm

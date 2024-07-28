const Task1 = require("../models/task.model");
const uuid = require("uuid");


//POST
const addNewTask = async (req, res) => {
  try {
    const { myTask } = req.body;

    const taskId = uuid.v4()

    const task = await Task1.create({
      myTask,
      taskId
    });

    res.status(201).json({
        success: true,
        message: task
    })


  } catch (error) {
    res.status(500).json({
        success: false,
        message: error.message
    })
  }
};


//GET
const getAllTask = async(req, res)=> {
  try {

    const tasks = await Task1.find()
    
    res.status(201).json({
      success: true,
      message: tasks
  })


} catch (error) {
  res.status(500).json({
      success: false,
      message: error.message
  })
}
}

//UPDATE
const update = async (req, res)=> {
  try {
    const id = req.body.tasks._id
    const {myTask} = req.body
    const updateTask = await Task1.findByIdAndUpdate(
      id,
      {myTask}
    )

    res.status(201).json({
      success: true,
      message: updateTask
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
  })
  }
}

//DELETE
const deleteTask = async(req, res)=> {
  try {
    const {id} = req.body.tasks._id 

  await Task1.findByIdAndDelete(id)
  res.status(200).json({
    success: true,
    message: "Succesfully deleted"
  })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
  })
  }
}


module.exports = {addNewTask, getAllTask, update, deleteTask}

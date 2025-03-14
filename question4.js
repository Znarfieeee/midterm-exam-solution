tasks = [];

function addTask (event) {
    event.preventDefault()
    const task = {
        id: task.length + 1,
        name: taskName,
        description: description
    }
    tasks.push(task)
}

function viewTask(){
    return tasks
}

function updateTask(id, newName, newDesc){
    const newTask = task.find(task => task.id === id);
    if (newTask) {
        task.name = newName
        task.description = newDesc
    } 
}

function deleteTask(id) {
    tasks = task.find(task => task.id !== id)
}
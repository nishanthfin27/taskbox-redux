import axios from 'axios'


const setNewTask = (task) => {
    return {
        type: 'SET_NEW_TASK',
        payload: task
    }
}

const startPutTasks = (task) => {
    return (dispatch) => {
        axios.put(`http://localhost:3033/api/tasks/${task.id}`, task)
        .then((response) => {
            const updatedTask = response.data 
            dispatch(setNewTask(updatedTask))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export default startPutTasks
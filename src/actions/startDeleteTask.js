import axios from 'axios'

const deletingTask = (task) => {
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}

const startDeleteTask = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response) => {
                const deleteTask = response.data 
                dispatch(deletingTask(deleteTask))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export default startDeleteTask
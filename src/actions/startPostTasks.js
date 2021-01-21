import axios from 'axios'

const setTasks = (task) => {
    return {
        type: 'SET_TASKS',
        payload: task
    }
}

const startPostTasks = (task) => {
    return (dispatch) => {
        axios.post('http://localhost:3033/api/tasks', task)
            .then((response) => {
                const task = response.data 
                dispatch(setTasks(task))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export default startPostTasks

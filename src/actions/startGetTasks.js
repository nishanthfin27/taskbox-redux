import axios from 'axios'

const getTasks = (task) => {
    return {
        type: 'GET_TASKS',
        payload: task 
    }
}

const startGetTasks = () => {
    return (dispatch) => {
        axios.get(' http://localhost:3033/api/tasks')
            .then((response) => {
                const alltasks = response.data 
                dispatch(getTasks(alltasks))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export default startGetTasks
const tasksInitialState = []

const tasksReducer = (state = tasksInitialState, action) => {
    switch(action.type) {
        case 'GET_TASKS' : {
            return [...action.payload]
        }
        case 'SET_TASKS' : {
            return [...state,action.payload]
        }
        case 'SET_NEW_TASK' : {
            return state.map((task) => {
                if(task.id === action.payload.id) {
                    return {...task,...action.payload}
                } else {
                    return {...task}
                }
            })
        }
        case 'DELETE_TASK' : {
            return state.filter((task) => {
                return task.id !== action.payload.id
            })
        }
        default: {
            return [...state]
        }
    }
}

export default tasksReducer
import React from 'react'
import { useDispatch } from 'react-redux'
import TaskForm from './TaskForm'
import startPutTasks from '../actions/startPutTasks'

const EditTask = (props) => {
    const {id, title, status, handleToggle } = props 

    const dispatch = useDispatch()

    const formSubmit = (task) => {
        dispatch(startPutTasks(task))
        handleToggle()
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <TaskForm 
                id={id}
                title={title}
                status={status}
                formSubmit={formSubmit}
            />
        </div>
    )
}

export default EditTask

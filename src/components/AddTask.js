import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Paper } from '@material-ui/core'
import startPostTasks from '../actions/startPostTasks'
import TaskForm from './TaskForm'
import styled from 'styled-components'

const Styledh2 = styled.h2`
    text-align: center;
`

const AddTask = (props) => {
    const [isSaved, setIsSaved] = useState(false)

    const dispatch = useDispatch()

    const formSubmit = (task) => {
        dispatch(startPostTasks(task))
        setIsSaved(true)
    }

    const  toggleIsSaved = (props) => {
        setIsSaved(false)
    }

    return (
        <div>
            <Paper>
                <Styledh2>Add Task</Styledh2>
                <TaskForm 
                    formSubmit={formSubmit}
                    isSaved={isSaved}
                    toggleIsSaved={toggleIsSaved}
                />
            </Paper>
        </div>
    )
}

export default AddTask

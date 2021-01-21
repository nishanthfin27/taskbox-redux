import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import EditTask from './EditTask'
import startDeleteTask from '../actions/startDeleteTask'
import { Button, Paper } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import styled from 'styled-components'

const Styledh3 = styled.h3`
    text-align: center;
`

const TaskItem = (props) => {
    const { id, title, status } = props 

    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false)

    const handleToggle = (e) => {
        const result = !toggle
        setToggle(result)
    }

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            dispatch(startDeleteTask(id))
        }
    }

    return (
        <div>
            { toggle ? (
                <Paper>
                <div>
                    <EditTask 
                        id={id}
                        title={title}
                        status={status}
                        handleToggle={handleToggle}
                    /><br />
                    {/* <button onClick={handleToggle}>cancel</button> */}
                    <Button variant="contained" color="secondary" onClick={handleToggle}
                    style={{marginLeft:'72px'}}>
                        cancel
                    </Button>
                </div>
                </Paper>
            ) : (
                <Paper>
                    <div>
                        {/* <h3> { title } </h3> */}
                        <Styledh3>{ title } </Styledh3><br />
                        <Checkbox
                            checked={status}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    <label>Completed</label> <br />
                        <Button variant="contained" color="primary" onClick={handleToggle}>
                        <EditIcon />
                        </Button>
                        {/* <button onClick={handleToggle}>edit</button> */}
                        <Button variant="contained" color="secondary"  onClick={() => {
                            handleRemove(id)
                        }}>
                        <DeleteIcon />
                        </Button>
                        {/* <button onClick={() => {
                            handleRemove(id)
                        }}>remove</button> */}
                    </div>
                </Paper>
            )}
        </div>

    )
}

export default TaskItem

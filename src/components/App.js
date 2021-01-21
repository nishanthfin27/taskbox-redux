import React from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'

const Styledh1 = styled.h1`
    text-align: center;
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`
const App = (props) => {

    return (
        <div>
            <Paper>
                <Styledh1>
                    TaskBox
                </Styledh1>
            </Paper>
            <StyledDiv>
                <TasksList />
                <AddTask />
            </StyledDiv>
        </div>
    )
}

export default App
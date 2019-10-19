import React from 'react';
import TaskList from "../../components/TaskList/TaskList.component";
import TaskForm from "../../components/TaskForm/TaskForm.component";

const TaskBoard = () => (
    <div className='container'>
        <h1>TasksBoard</h1>
        <TaskForm />
        <div className='TaskLists__wrapper'>
            <TaskList type='backlog'/>
            <TaskList type='done'/>
            <TaskList type='archived'/>
        </div>
    </div>
)

export default TaskBoard;
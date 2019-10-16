import React, { useState } from 'react';
import Task from "../Task/Task.component";
import TaskForm from "../TaskForm/TaskForm.component";
import { connect } from 'react-redux';

const TaskList = (props) => {

    const removeTask = (e) => {
        console.log('removed');
    }

    const archiveTask = () => {
        console.log('archived');
    }

    const markDone = () => {
        console.log('mark done');
    }

    const tasksList = props.tasks;

    return (
        <div className='TaskList__wrapper'>
            <TaskForm/>
            <div className='TaskList'>
                {tasksList.map( (item, index) => {
                    return <Task markDone={markDone}
                                 removeTask={removeTask}
                                 archiveTask={archiveTask}
                                 taskName={item.name}
                                 key={index}
                    />
                })}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        tasks : state.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeTask: () => dispatch({type: 'REMOVE_TASK'})
    }
}
export default connect(mapStateToProps)(TaskList);
import React, { useState, useEffect } from 'react';
import Task from "../Task/Task.component";
import TaskForm from "../TaskForm/TaskForm.component";
import { connect } from 'react-redux';
const TaskList = (props) => {


    const tasksList = props.tasks;

    return (
        <div className='TaskList__wrapper'>
            <TaskForm/>
            <div className='TaskList'>
                {tasksList.map( (item, index) => {
                    return <Task taskName={item.title}
                                 key={index}
                                 toDoitemId={item.id}
                                 isDone={item.isDone}
                                 isArchived={item.isArchived}
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


export default connect(mapStateToProps)(TaskList);
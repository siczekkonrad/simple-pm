import React, { useState } from 'react';
import { connect } from 'react-redux';

const TaskForm = (props) => {

    const [task, setTask] = useState('');
    const resetInput = () => {
        setTask('')
    }
    const addTask = (e) => {
        e.preventDefault();
        setTask(e.target.value);

    }

    const submitTask = (task) => {
        props.addTask({
            title: task,
            id: new Date() + task,
            isDone: false,
            isArchived: false,
        })
        resetInput()
    }

    return (
        <div className='TaskForm'>
            <input className='TaskForm__input'
                   value={task}
                   onChange={addTask}/>
            <button className='TaskForm__button'
                onClick={() => {
                    if(task !== '') {
                        submitTask(task)
                    }}}
            >Add task</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask : (task) => dispatch({type: 'ADD_TASK', payload: task})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
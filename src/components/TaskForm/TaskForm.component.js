import React, { useState } from 'react';
import { connect } from 'react-redux';

const TaskForm = (props) => {

    const [task, setTask] = useState('');
    const [listType, setType] = useState('');

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
            list: listType,
            isDone: false,
            isArchived: false,
        })
        resetInput()
    }

    return (
        <div className='TaskForm'>
            <div className='TaskForm__text'>
                <input className='TaskForm__input'
                   value={task}
                   onChange={addTask}/>
            </div>
            <div className='TaskForm__radio'>
                <input type='radio' name='list' value='active' onChange={(e) => setType(e.target.value)}/>Active <br/>
                <input type='radio' name='list' value='done' onChange={(e) => setType(e.target.value)}/>Done <br/>
                <input type='radio' name='list' value='archived' onChange={(e) => setType(e.target.value)}/>Archived <br/>
            </div>
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
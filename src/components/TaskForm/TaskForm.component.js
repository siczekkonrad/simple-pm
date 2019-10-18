import React, { useState } from 'react';
import { connect } from 'react-redux';

const TaskForm = (props) => {

    const [task, setTask] = useState('');
    const [listType, setType] = useState('');

    const resetInput = () => {
        setTask('')
    }
    const resetListType = () => {
        setType('')
    }
    const addTask = (e) => {
        e.preventDefault();
        setTask(e.target.value);

    }

    const submitForm = () => {
        if(task !== '' && listType !== '') {
            submitTask(task)
        }
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
        resetListType()
    }

    return (
        <form className='TaskForm'  onSubmit={(e) => {
            e.preventDefault();
            submitForm();
           }}>
            <div className='TaskForm__text'>
                <input className='TaskForm__input'
                   value={task}
                   onChange={addTask}/>
            </div>
            <div className='TaskForm__radio'>
                <input type='radio' name='list' value='active' required='required' onChange={(e) => setType(e.target.value)}/>Active <br/>
                <input type='radio' name='list' value='done' required='required' onChange={(e) => setType(e.target.value)}/>Done <br/>
                <input type='radio' name='list' value='archived' required='required' onChange={(e) => setType(e.target.value)}/>Archived <br/>
            </div>
            <button className='TaskForm__button'>Add task</button>
        </form>
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
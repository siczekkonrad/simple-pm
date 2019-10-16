import React, { useState } from 'react';
import { connect } from 'react-redux';

const Task = (props) => {

    const name = props.taskName;
    const isItemDone = props.isDone;
    const todoItemId = props.toDoitemId;
    const isItemArchived = props.isArchived;

    return (
        <div className={`Task ${isItemDone === true ? 'done' : 'unDone'} ${isItemArchived === true ? 'archive': ''}`}>
            <div className='TaskWrapper'>
                <h4 className='Task__title'>{name}</h4>
                <div className='Task__actions'>
                    <button className='Task__button'
                        onClick={() => props.removeTask(todoItemId)}
                    >Remove</button>
                    <button className='Task__button'
                        onClick={() => props.archiveTask({id: todoItemId, isArchived: !isItemArchived})}
                    >
                        {isItemArchived === true ? 'Unarchive' : 'Archive'}
                    </button>
                    <button className='Task__button'
                        onClick={() =>
                            props.toggleDone({id: todoItemId, isDone: !isItemDone})}
                    >{isItemDone === true ? 'Unmark' : 'Done'}
                    </button>
                </div>
            </div>
        </div>
    )
}
// const mapStateToProps = state => {
//     return {
//         tasks: state.tasks
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        removeTask: (itemId) => dispatch({type: 'REMOVE_TASK', payload: itemId}),
        toggleDone: (item) => dispatch({type: 'TOGGLE_DONE', payload: item}),
        archiveTask: (item) => dispatch({type: 'ARCHIVE_TASK', payload: item})
    }
}

export default connect('',mapDispatchToProps)(Task);
import React from 'react';

const Task = (props) => {
    const name = props.taskName;
    return (
        <div className='Task active'>
            <div className='TaskWrapper'>
                <h4 className='Task__title'>{name}</h4>
                <div className='Task__actions'>
                    <button className='Task__button'
                        onClick={() => props.removeTask()}
                    >Remove</button>
                    <button className='Task__button'
                        onClick={() => props.archiveTask()}
                    >Archive</button>
                    <button className='Task__button'
                        onClick={() => props.markDone()}
                    >Done</button>
                </div>
            </div>
        </div>
    )
}


export default Task;
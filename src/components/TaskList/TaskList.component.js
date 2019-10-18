import React  from 'react';
import Task from "../Task/Task.component";
import { connect } from 'react-redux';
const TaskList = (props) => {

    const tasksList = props.tasks;

    return (
        <div className='TaskList__wrapper'>

            <div className='TaskList'>
                <h3>{props.type}</h3>
                {tasksList.map( (item, index) => {
                    const type = props.type;
                    if(item.list === type) {
                        return <Task taskName={item.title}
                                     key={index}
                                     toDoitemId={item.id}
                                     isDone={item.isDone}
                                     isArchived={item.isArchived}
                        />
                    }
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
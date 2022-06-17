import React from 'react';

const List = ({activities,setActivities,setEditActivity}) => {

    const handleDelete = ({id}) => {
        setActivities( activities.filter( (activity) => activity.id !== id) )
    }
    const handleComplete = (activity) => {
        setActivities(
            activities.map(
                (item) => {
                    if(item.id=== activity.id){
                        return {...item, completed: !item.completed}
                    }
                    return item;
                }
            )
        )
    }
    const handleEdit = ({id}) => {
        const findActivity = activities.find( (activity) => activity.id === id);
        setEditActivity(findActivity);
    }
    return (
        <div>
            {
                activities.map(
                    (activity) => (
                        <li className="list-item" key={activity.id} >
                            <input
                                type="text"
                                value={activity.title}
                                className={` list ${activity.completed ? "complete" : ""}`}
                                onChange={(e) => e.preventDefault()}
                            />
                            <div>
                                <button className="button-complete task-butt on"
                                        onClick={() => handleComplete(activity)}>
                                    <i className="bi bi-check2-circle"></i>
                                </button>
                                <button
                                    className="button-edit task-button"
                                    onClick={() => handleEdit(activity)}>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                    className="button-delete task-button"
                                    onClick={() => handleDelete(activity)}>
                                    <i className="bi bi-x-circle"></i>
                                </button>
                            </div>

                        </li>
                    )
                )
            }
        </div>
    );
};

export default List;
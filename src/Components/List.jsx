import React from 'react';

const List = ({activities,setActivities}) => {


    return (
        <div>
            {
                activities.map(
                    (activity) => (
                        <li className="list-item" key={activity.id} >
                            <input
                                type="text"
                                value={activity.title}
                                className="list"
                                onChange={(e) => e.preventDefault()}
                            />
                            <div>
                                <button className="button-complete task-button">
                                    <i className="bi bi-check2-circle"></i>
                                </button>
                                <button className="button-edit task-button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button className="button-delete task-button">
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
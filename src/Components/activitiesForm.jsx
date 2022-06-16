import React from 'react';
import {v4 as uuidV4} from 'uuid';

const ActivitiesForm = ({input, setInput, activities, setActivities, editActivity, setEditActivity}) => {
    const updateActivity = (title,id,completed) => {
        const newActivity = activities.map((activity)=>
            activity.id === id ? {title, id, completed} : activity
        )
        setActivities(newActivity);
        setEditActivity("");
    }
    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const submitChange = (e) => {
        e.preventDefault();
        if(!editActivity){
            setActivities([ ...activities, { id: uuidV4(), title: input, completed: false }]);
            setInput("");
        }else{
            updateActivity(input,editActivity.id,editActivity.completed);
        }

    }
    return (
        <form onSubmit={submitChange}>
            <input
                type="text"
                placeholder="Enter an activity..."
                className="task-input"
                value={input}
                required
                onChange={inputChange}
             />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    );
};

export default ActivitiesForm;
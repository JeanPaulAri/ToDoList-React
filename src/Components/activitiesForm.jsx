import React from 'react';
import {v4 as uuidV4} from 'uuid';

const ActivitiesForm = ({input, setInput, activities, setActivities}) => {

    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const submitChange = (e) => {
        e.preventDefault();
        setActivities([ ...activities, { id: uuidV4(), title: input, completed: false }]);
        setInput("");
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
import React from 'react';

const Form = ( input, setInput, Activities, setActivities ) => {

    const inputChange = (e) => {
        setInput(e.event.target);
    }
    const submitChange = (e) => {
        e.preventDefault();
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

export default Form;
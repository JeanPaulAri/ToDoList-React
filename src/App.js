import React,{useState} from 'react';

import Header from './Components/Header';
import ActivitiesForm from './Components/activitiesForm';
import List from './Components/List';
import './App.scss';

function App() {

    const [input,setInput]= useState("");
    const [activities,setActivities]= useState([ ]);
    const [editActivity,setEditActivity]= useState(null);
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <Header />
            </div>
            <div>
                <ActivitiesForm
                    input={input}
                    setInput={setInput}
                    activities={activities}
                    setActivities={setActivities}
                    editActivity={editActivity}
                    setEditActivity={setEditActivity}
                />
            </div>
            <div>
                <List
                    activities={activities}
                    setActivities={setActivities}
                    setEditActivity={setEditActivity}
                />
            </div>
        </div>
    </div>
  );
}

export default App;

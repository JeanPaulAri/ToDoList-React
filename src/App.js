import React,{useState} from 'react';

import Header from './Components/Header';
import Form from './Components/Form';
import './App.scss';

function App() {

    const [input,setInput]= useState("");
    const [Activities,setActivities]= useState([]);
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <Header />
            </div>
            <div>
                <Form
                    input={input}
                    setInput={setInput}
                    Activities={Activities}
                    setActivities={setActivities}
                />
            </div>

        </div>
    </div>
  );
}

export default App;

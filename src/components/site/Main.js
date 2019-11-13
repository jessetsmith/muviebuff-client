import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import '../../App.css';
import Sidebar from '../Sidebar/Sidebar';


const Main = (props) => {

    return (
       
        <div className='main'>
            <div className='mainDiv'>
            <Router>
                <Sidebar />
            </Router>
            </div>
         </div>
    )
}

export default Main;
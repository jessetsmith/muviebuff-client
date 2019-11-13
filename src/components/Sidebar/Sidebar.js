import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import '../../App.css';
import Home from '../site/Home';
import MuvieList from '../Muvies/Muvies';

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/muvies'>mUvies</Link></li>
                </ul>
            </div>
       
            <div className='sidebar-route'>
            <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route exact path='/muvies'><MuvieList token={props.sessionToken} /></Route>
            </Switch>
            </div>
        </div>
    )
}

export default Sidebar;
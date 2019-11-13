import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Sidebar from './components/Sidebar/Sidebar';
import Auth from './components/Auth/Auth';
import Main from './components/site/Main';


function MuvieApp(props) {
  const [sessionToken, setSessionToken] = useState('');


  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const setSession = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedView = () => {
    return (sessionToken === localStorage.getItem('token') ? <Main token={sessionToken}/> : <div id='auth'><Auth setSession={setSession}/></div>)
  }

  return (
    <div className="App">
      <Navbar clickLogout={clearToken}/>
      <div>
      {protectedView()}
      </div>
    </div>
  );
}

export default MuvieApp;

import React, {useState} from 'react';
import './Auth.css';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    // const [ setUsername] = useState('');
    // const [ setPassword] = useState('');
    const [login, setLogin] = useState(true);


    const toggle = () => {
        return login ? 'New? Signup Here!' : 'Memeber? Login Here!';
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login);
        // setUsername('');
        // setPassword('');
    }

    const inputFields = () => !login ? <Signup setSession={props.setSession}/> : <Login setSession={props.setSession}/>;

    return (
        <div>
            <div className='form'>
                <br/>
                {inputFields()}
                <br/>
                <button id='button' onClick={loginToggle}>{toggle()}</button>
                <br/>
            </div>
        </div>
    )

    
}

export default Auth;
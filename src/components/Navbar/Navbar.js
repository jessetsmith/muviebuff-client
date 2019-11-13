import React from 'react';
import './Navbar.css';
import {makeStyles} from '@material-ui/core/styles';    
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/muvieBuff.PNG';


const useStyles= makeStyles({      
    root: {
        flexGrow: 1                
    },
    title: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: '#0f0d11',
    }
})


const Navbar = (props) => {
    const classes = useStyles();           
return(
    <div className={classes.root}>  
        <AppBar position="static" >
            <ToolBar id='nav' className={classes.color}>
                <img className='logo' alt='logoPic' src={Logo} height='65'></img>
                <br/>
                <Button id='logout' onClick={props.clickLogout}>Logout</Button>
            </ToolBar>
            </AppBar>    
    </div>
)
}
export default Navbar;

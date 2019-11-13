import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button}from 'reactstrap';
import MyMuvies from '../Muvies/MyMuvies';
import MuvieCreate from './CreateMovies';
import '../../App.css';



const Muvies = (props) => {
    const [muvies, setMuvies ] = useState([]);
    const [postActive, setPostActive] = useState(false);
    

    const fetchMuvies = () => {
        fetch('http://localhost:3000/muvies/mymuvies/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token 
            })
        }).then((res) => res.json())
        .then((data) => {
            setMuvies(data) 
            console.log(data)
        })
        
    }
       

    const muvieRows = () => {
        const muvieCol = {
            title: 'Title',
            year: 'Year',
            director: 'Director',
            description: 'Description',
            publicRating: 'Public Rating',
            watched: 'Watched: Y/N',
            userRating: 'Rate this Movie'
        }
        return [<MyMuvies key={'Column Names'} muvies={muvieCol}/>].concat(
            muvies.map((muvieInfo, index) => 
            {
                return <MyMuvies key={index} muvies={muvieInfo}/>
            })
        );
    };

    const postOn = () => {
        setPostActive(true);
    }

    const postOff = () => {
        setPostActive(false);
    }

  useEffect(() => {
      fetchMuvies();
  }, [])

    return (
        <div className='main'>
        <div className='mainDiv'>
        <Container>
        <Button color='dark' onClick={() => postOn()}>Create Post</Button>
            <Row>
                <Col md='3'>
                    {postActive ? <MuvieCreate postOff={postOff} fetchMuvies={fetchMuvies} token={props.token}/> : <></>}
                </Col>
                <Col md='9'>
                    {muvieRows()}
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}

export default Muvies;
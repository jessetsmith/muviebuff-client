import React from 'react';
import {Card, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// //import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



// import styled from 'styled-components';
// import { makeStyles } from '@material-ui/core';

// const Background = styled.div`
//     background: linear-gradient(to bottom, gray, #e1e6e2)
// `;

// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     width: 100%;
// `;

// const Col = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex: 1;
// `;

// const Wrapper = styled.div`
//     display: block;
//     margin: auto;
//     padding: 2em;
// `;

// const useStyles = makeStyles({
//     card: {
//         maxWidth: 345,
//         maxHeight: 700
//     },

// });

const MyMuvies = (props) => {

    // const classes = useStyles();

    return (
        <Card className='muvieCard'>
        <CardBody>
            <CardTitle>{props.muvies.title}</CardTitle>
            <CardText>Year: {props.muvies.year}</CardText>
            <CardText>Director: {props.muvies.director}</CardText>
            <CardText>{props.muvies.description}</CardText>
            <CardSubtitle>Watched? {String(props.muvies.watched)} </CardSubtitle>
            <CardSubtitle>Public Rating: {props.muvies.publicRating}</CardSubtitle>
            <CardSubtitle>User Rating: {props.muvies.userRating}</CardSubtitle>
        </CardBody>
        </Card>


        // <Background>
        //     <Row>
        //         <Col>
        //             <Wrapper>
        //                 <Card className={classes.card} >
        //                     <CardActionArea>
        //                         <CardContent>
        //                             <Typography gutterBottom variant='h5' component='h2'>{props.muvies.title}</Typography>
        //                             <Typography gutterBottom variant='h5' component='h3'>{props.muvies.year}</Typography>
        //                             <Typography gutterBottom variant='h5' component='h3'>{props.muvies.director}</Typography>
        //                             <Typography variant='body2' color='textSecondary' component='p'>{props.muvies.description}</Typography>
        //                             <Typography gutterBottom variant='h5' component='h3'>{props.muvies.publicRating}</Typography>
        //                             <Typography gutterBottom variant='h5' component='h3'>{props.muvies.watched}</Typography>
        //                             <Typography gutterBottom variant='h5' component='h3'>{props.muvies.userRating}</Typography>
        //                     </CardContent>
        //                     </CardActionArea>
        //                     <CardActions>
        //                         <Button size='small'>Share</Button>
        //                         <Button size='small'>Learn More</Button>
        //                     </CardActions>
        //                 </Card>
        //             </Wrapper>
        //         </Col>
        //     </Row>
        // </Background>
      
    );
};

export default MyMuvies;
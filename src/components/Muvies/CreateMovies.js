import React, {useState, UseEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const CreateMuvie = (props) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');
    const [publicRating, setPublicRating] = useState('');
    const [watched, setWatched] = useState('');
    const [userRating, setUserRating] = useState('');

    const muvieCreate = (event, muvie) => {
        event.preventDefault();
        fetch('http://localhost:3000/muvies/post', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                year: year,
                director: director,
                description: description,
                publicRating: publicRating,
                watched: watched,
                userRating: userRating
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((data) => {
            setTitle('');
            setYear('');
            setDirector('');
            setDescription('');
            setPublicRating('');
            setWatched('');
            setUserRating('');
            props.fetchMuvies();
        })
    } 

    return(
        <Modal isOpen={true}>
           <ModalHeader>Post a Muvie</ModalHeader>
           <ModalBody>
               <Form onSubmit={muvieCreate}>
               <FormGroup>
                       <Label htmlFor='title'>Title</Label>
                       <Input name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='year'>Year</Label>
                       <Input name='year' value={year} onChange={(e) => setYear(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='director'>Director</Label>
                       <Input name='director' value={director} onChange={(e) => setDirector(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='description'>Description</Label>
                       <Input name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='watched'>Watched?</Label>
                       <Input type='select' name='watched' value={watched} onChange={(e) => setWatched(e.target.value)}>
                           <option></option>
                           <option value='Yes'>Yes</option>
                           <option value='No'>No</option>
                        </Input>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='publicRating'>Public Rating</Label>
                       <Input name='publicRating' value={publicRating} onChange={(e) => setPublicRating(e.target.value)}/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor='userRating'>User Rating</Label>
                       <Input name='userRating' value={userRating} onChange={(e) => setUserRating(e.target.value)}/>
                   </FormGroup>
                   <Button type='submit'>Post Muvie</Button>
               </Form>
           </ModalBody>
       </Modal>
    )
}

export default CreateMuvie;
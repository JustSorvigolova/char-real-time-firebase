import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";
import Message from "./Message";
import Loader from "../utils/Loader";


const Chat = () => {
    let keys = Math.floor(Math.random()* 3);
    let {auth, firestore} = useContext(Context)
    let [user] =  useAuthState(auth)
    let [value, SetValue] = useState('')
    let [messages, loading] =useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    let SenMessage=  ()=>{
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        SetValue('')


    }
    if (loading){
        return <Loader/>
    }

    const handleChange = (e) =>{
        SetValue(e.target.value)
    }

    return (
       <Container>
           <Grid container justifyContent={"center"} style={{height: window.innerHeight - 50, marginTop: 20}}>
                <div style={{width: '80%', height:'70vh',border:'1px solid gray', overflowY: 'auto'}}>
  {messages.map(message=> <Message key={keys}
                        messagess={message.text}
                        photoURL={message.photoURL}
                        displayName={message.displayName}
                      styless={{one: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                      two: user.uid === message.uid ? 'auto' : '10px',

                                   }}

  />)}
                </div>
               <Grid
                   container
                   direction={"column"}
                   alignItems={"flex-end"}
                   style={{ width:'80%'}}
               >
                   <TextField onChange={handleChange} value={value} fullWidth maxRows={2} variant={"outlined"} />
                   <Button onClick={SenMessage} color={"primary"}>Send</Button>
               </Grid>
           </Grid>
       </Container>
    );
};

export default Chat;
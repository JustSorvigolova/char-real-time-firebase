import React from 'react';
import {Avatar, Grid} from "@mui/material";

const Message = ({styless,photoUrl,displayName,messagess}) => {
    return (
        <div
            style={{
                margin: 10,
                border: styless.one,
                marginLeft: styless.two,
                width: 'fit-content',
                padding: 5,
            }}
        >
        <Grid container>
            <Avatar src= {photoUrl} />
            <h3> {displayName} </h3>
        </Grid>
        <p> {messagess} </p>
        </div>
    );
};

export default Message;
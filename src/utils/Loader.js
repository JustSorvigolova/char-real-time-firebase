import React from 'react';
import {Box,Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray' }} container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                  <h1 style={{color:"yellow"}}>Loading...</h1>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
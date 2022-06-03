import * as React from 'react';
import { ButtonGroup, Button } from "@mui/material";

export default function BasicButtons() {
  return (
    <ButtonGroup>
        <Button variant="contained" color="green" style={{
            alignItems: 'center',
            marginRight: '1rem',
            borderRadius: '50%',
            height: '5rem',
            width: '5rem',
            }}>
            <img src="images/douche.png" height='50rem'/>
        </Button>

        <Button variant="contained" color="green" style={{
              alignItems: 'center',
              borderRadius: '50%',
              height: '5rem',
              width: '5rem',
            }}>
            <img src="images/handicaped.png" height='55rem'/>
        </Button>

        <Button variant="contained" color="green" style={{
              alignItems: 'center',
              marginLeft: '1rem',
              borderRadius: '50%',
              height: '5rem',
              width: '5rem',
            }}>
            <img src="images/cintre.png" height='50rem'/>
        </Button>
        
        </ButtonGroup>
  );
}
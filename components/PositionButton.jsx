import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
      <Button variant="contained" color="blueButton" style={{
              alignItems: 'center',
              borderRadius: '50%',
              height: '5rem',
              width: '5rem',
            }}>
            <img src="images/cible.png" height='65rem'/>
        </Button>
  );
}
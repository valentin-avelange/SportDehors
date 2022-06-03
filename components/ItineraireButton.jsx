import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
      <Button variant="contained" color="blueButton" style={{
          alignItems: 'center',
          textTransform: 'none',
          borderRadius: '5rem',      
          height: '2.5rem',
          width: '15rem',
          color: 'white',
          fontSize: '1.5rem',
            }}>
          <img src="images/itineraire.png" height='28rem' style={{
            marginRight: '1.5rem',
          }} />
            Itinéraire
      </Button>
  );
}
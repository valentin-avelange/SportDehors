import React from "react";
import { ButtonGroup, Button } from "@mui/material";

export default function BasicButtons() {
    return (
        <ButtonGroup>
            <Button variant="contained" color="white" style={{
            borderTopLeftRadius: '10rem',
            borderBottomLeftRadius: '10rem',
            height: '1.5rem',
            width: '5rem',
            borderRight: '0.05rem solid black',
            textTransform: 'none',
            }}>Aucun
        </Button>

        <Button variant="contained" color="white" style={{
            borderTopRightRadius: '10rem',
            borderBottomRightRadius: '10rem',
            height: '1.5rem',
            width: '5rem',
            borderLeft: '0.05rem solid black',
            textTransform: 'none',
            }} >Tout</Button>
        </ButtonGroup>
    );
  }
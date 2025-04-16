import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';

const NavBar = ({ setCategory }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#2c3e50',
        padding: '10px 0',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => setCategory('nature')}
          sx={{
            color: '#ecf0f1',
            fontSize: '16px',
            '&:hover': {
              color: '#1abc9c',
              borderBottom: '2px solid #1abc9c',
            },
          }}
        >
          Nature
        </Button>
        <Button
          onClick={() => setCategory('art')}
          sx={{
            color: '#ecf0f1',
            fontSize: '16px',
            '&:hover': {
              color: '#e74c3c',
              borderBottom: '2px solid #e74c3c',
            },
          }}
        >
          Art
        </Button>
        <Button
          onClick={() => setCategory('tech')}
          sx={{
            color: '#ecf0f1',
            fontSize: '16px',
            '&:hover': {
              color: '#3498db',
              borderBottom: '2px solid #3498db',
            },
          }}
        >
          Tech
        </Button>
        <Button
          onClick={() => setCategory('all')}
          sx={{
            color: '#ecf0f1',
            fontSize: '16px',
            '&:hover': {
              color: '#f39c12',
              borderBottom: '2px solid #f39c12',
            },
          }}
        >
          All
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

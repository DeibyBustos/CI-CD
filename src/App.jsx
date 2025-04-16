import './App.css'
import NavBar from './layout/NavBar'
import AppRoutes from './routes/AppRoutes'
import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [category, setCategory] = useState('all'); 

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1abc9c',
      },
      secondary: {
        main: '#e74c3c',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar setCategory={setCategory} /> 
      <AppRoutes category={category} /> 
    </ThemeProvider>
  )
}

export default App
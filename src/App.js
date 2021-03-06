import React from 'react';
import {useState} from 'react';
import { createMuiTheme, Typography } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles'
import makeStyles from '@material-ui/styles/makeStyles'
import {Paper} from '@material-ui/core'
import {light, dark} from './theme.js'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import "fontsource-catamaran"



function App() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode || false)
  const useStyles = makeStyles((theme) => ({
    page: {
      minHeight: '100vh',
      background: (darkMode ? dark : light).palette.primary.main,
    },
  }));
  const classes = useStyles();
  


  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <div className={classes.page}>
        <Typography style={{fontFamily: 'catamaran'}, {color: "#B0D7FF"}, {fontSize: 75}, {textAlign: "center"}}>Will Baron</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
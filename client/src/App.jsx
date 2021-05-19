import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Input } from '@material-ui/core';
import fullLogo from './images/vbb-full-logo.png';
import useStyles from './styles';
import { SearchBar } from './components/search/SearchBar'
const App = () => {
    const classes = useStyles();

    return(
        <div>
            <CssBaseline />
                        <AppBar 
                            className = {classes.appBar}
                        >
                            <Toolbar className = {classes.toolBar}>
                                  <img 
                                     src= {fullLogo}
                                     alt = "Logo for Village book builders."
                                    width = '500 px'
                                 />
                            </Toolbar>
                        </AppBar>
        </div>
    )
}

export default App;
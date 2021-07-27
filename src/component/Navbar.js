import React from 'react'
import { AppBar,Toolbar,Typography,IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return(
        <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton color="inherit">
              <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Live Score
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;
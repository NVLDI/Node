import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar as MuiAppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../assets/logo192.png';


function AppBar() {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    
  };

  return (
    <MuiAppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
      <img src={logo} alt="logo" style={{ height: '40px', marginRight: '16px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          NodePro
        </Typography>
        {user ? (
          <>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </>
        )}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;

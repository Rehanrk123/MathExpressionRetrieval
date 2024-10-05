import React from 'react';
import { AppBar, Toolbar, Button, Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import '../styles/Navbar.css'; // Ensure you have Navbar styles

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Avatar alt="User Profile" src="/profile.jpg" />
        <div style={{ flexGrow: 1 }} />
        <Button color="inherit" startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

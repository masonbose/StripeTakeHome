import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { totalCount } = useSelector((state) => state.store);

  return (
    <AppBar position="static">
      <Toolbar style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Link style={{textDecoration: 'none', color: '#FFF'}} to="/">
          <Typography variant="overline"> Cozy Threads</Typography>
        </Link>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div>
            <Link style={{textDecoration: 'none', marginRight: "2px"}} to="/checkout">
              <Typography variant="overline" style={{color: "#fff"}}>Cart: </Typography>
            </Link>
            <Typography variant="overline" style={{fontWeight: "bold"}}>{totalCount}</Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>  
  );
}

export default Header;
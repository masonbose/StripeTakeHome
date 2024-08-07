import React from 'react';
import { Typography, Button, ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import homepage from '../assets/homepage.png';
import buttonBackground from '../assets/buttonBackground.png';
import '../styles/homepage.css'

function Homepage() {
  return (
    <div style={{textAlign: "center"}}>
      <div className='container'>
        <img src={homepage} alt="Homepage background" className='img-homepage'/>
        <Typography variant="h2" className='centered'>
          Cozy Threads
        </Typography>
      </div>
      <div className='container'>
        <img src={buttonBackground} alt="Button background" className='img-button'/>
        <Link to="/shop" style={{textDecoration: 'none'}} className='centered'>
          <Button variant="contained" size="large">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
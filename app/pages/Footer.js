"use client"
import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const iconStyle = {
    color: '#fff',
    marginRight: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <IconButton href="https://www.instagram.com/" target="_blank">
          <InstagramIcon style={iconStyle} />
        </IconButton>
        <IconButton href="https://www.facebook.com/" target="_blank">
          <LinkedIn style={iconStyle} />
        </IconButton>
        <IconButton href="https://twitter.com/" target="_blank">
          <TwitterIcon style={iconStyle} />
        </IconButton>
        <IconButton href="#" target="_blank">
          <GitHub style={iconStyle} />
        </IconButton>
      </div>
      <br />
      <h3>&copy; 2024 AgroTool</h3><br />
      <p>Created By Sonu Kumar</p>
    </footer>
  );
};

export default Footer;

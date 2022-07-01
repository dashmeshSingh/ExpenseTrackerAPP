import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
      <h3>Too many <span className='change'>expenses !!!</span></h3></div>
      <div className='nav-center'>
          <h1>Expense Tracker</h1></div>
      <div className='nav-right'>
        <InstagramIcon className='gap'/>
        <TwitterIcon className='gap'/>
        <YouTubeIcon className='gap'/>
      </div>

    </div>
  )
}

export default NavbarComponent;

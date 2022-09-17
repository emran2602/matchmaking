import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
function header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon' />
        </IconButton>

        <img 
            className='header_logo'
            src= 'https://i.pinimg.com/originals/5a/ef/42/5aef423c06700a9afe62bfacfe1c74a9.png'
            alt = 'header logo'
        />
        <IconButton>
            <ForumIcon fontSize='large' className='header_icon' />
        </IconButton>
    </div>
  )
}

export default header
import * as React from 'react';
import './Textbox.css';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';



export default function Textbox( {text}) {
    return (
        <div className='container'>
            <p className='text'>{text}</p>
            <Button 
                className='resume-button' 
                href={process.env.PUBLIC_URL + '/files/JonathanEriksonCV.pdf'}
                download
            >
                <DownloadIcon />
                Resume
            </Button>
        </div>
    );
}
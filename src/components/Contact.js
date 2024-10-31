import * as React from 'react';
import './Contact.css';
import { MailOutline, Phone, LinkedIn,  } from '@mui/icons-material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function Contact() {

    return (
        <div className='outer-contact-container'>
            <h1 className='contact-text'>Contact</h1>
            <div className='contact-container'>
                <a href="mailto:contact@jonathanerikson.com" className='contact-item'>
                    <MailOutline style={{ fontSize: 30 }} />
                    <Typography variant="button" component="span">
                        contact@jonathanerikson.com
                    </Typography>
                </a>
                <a href="tel:+46761179022" className='contact-item'>
                    <Phone style={{ fontSize: 30 }} />
                    <Typography variant="button" component="span">
                        +46761179022
                    </Typography>
                </a>
                <a href="https://www.linkedin.com/in/jonathanerikson00/" className='contact-item'>
                    <LinkedIn style={{ fontSize: 30 }} />
                    <Typography variant="button" component="span">
                        Jonathan Erikson
                    </Typography>
                </a>
            </div>
        </div>
    );
};
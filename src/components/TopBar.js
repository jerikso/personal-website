import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';

import './TopBar.css';

const navItems = ['home', 'about', 'projects', 'contact'];

export default function TopBar( {refs}) {
return (
    <div className='topbar-container'>
        <ButtonGroup variant="contained" aria-label="Basic button group" sx={{width: "30%", position: "fixed", background: "white", margin: 0, padding: 0}}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ width: "35%" }} color="primary" onClick={() =>
                                {
                                    let ref = refs[item];
                                    ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                                }
                            }>
                                <Typography variant="button" component="span">
                                    {item}
                                </Typography>
                            </Button>
                        ))}
        </ButtonGroup>
    </div>
);
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery, useTheme } from '@mui/material';

import './TopBar.css';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

export default function TopBar({ refs }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    // cut off at 
    const pixelCutoff = 768;
    const isMobile = useMediaQuery(theme.breakpoints.down(pixelCutoff));

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigationClick = (item) => {
        let ref = refs[item];
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        handleMenuClose(); // Close the menu after clicking a nav item
    };

    return (
        <div className='topbar-container'>
            {isMobile ? (
                <>
                    <IconButton
                        color="inherit"
                        aria-label="open menu"
                        edge="end"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {navItems.map((item) => (
                            <MenuItem
                                key={item}
                                onClick={() => handleNavigationClick(item)}
                                className="nav-btn"
                            >
                                <Typography variant="button" component="span">
                                    {item}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <ButtonGroup className="btn-group" variant="contained" aria-label="Basic button group">
                    {navItems.map((item) => (
                        <Button
                            key={item}
                            className="nav-btn"
                            color="primary"
                            onClick={() => handleNavigationClick(item)}
                        >
                            <Typography variant="button" component="span">
                                {item}
                            </Typography>
                        </Button>
                    ))}
                </ButtonGroup>
            )}
        </div>
    );
}

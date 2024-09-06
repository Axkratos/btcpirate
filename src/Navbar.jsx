import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
//differnt style component used vaxa
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#2A9D8F', // Dark teal background
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(1, 2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#E9C46A', // Gold color for the logo text
    fontWeight: 'bold',
    fontSize: '28px',
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
    textTransform: 'uppercase',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#F1FAEE', // Light background for button text
    border: `1px solid #E76F51`, // Darker orange border
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 2),
    textTransform: 'uppercase',
    '&:hover': {
        backgroundColor: '#E76F51', // Darker orange on hover
        color: '#fff',
    },
}));

const Navbar = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledTypography variant="h6">
                        GBW
                    </StyledTypography>
                </Link>
                <Box flexGrow={1} />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledButton>Home</StyledButton>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <StyledButton>About Us</StyledButton>
                </Link>
                <Link to="/privacy" style={{ textDecoration: 'none' }}>
                    <StyledButton>Privacy Policy</StyledButton>
                </Link>
                <Link to="/terms-of-service" style={{ textDecoration: 'none' }}>
                    <StyledButton>Terms of Service</StyledButton>
                </Link>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;

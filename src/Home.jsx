import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LeftComponent from './LeftComponent';
import CenterComponent from './CenterComponent';
import RightComponent from './RightComponent';

// Define your theme colors
const theme = createTheme({
    palette: {
        primary: { main: '#264653' },
        secondary: { main: '#E76F51' },
        background: { default: '#F4A261' }, // Set background color to match your theme
    },
    typography: { fontFamily: 'Trebuchet MS, sans-serif' },
});

const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    padding: '20px',
                    backgroundColor: theme.palette.background.default, // Use theme background color
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sm={4} md={3}>
                        <LeftComponent />
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <CenterComponent />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <RightComponent />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default Home;

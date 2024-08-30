import React from 'react';
import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LeftComponent from './LeftComponent';
import CenterComponent from './CenterComponent';
import RightComponent from './RightComponent';
import Navbar from './Navbar'; // Ensure this import matches your file structure

const theme = createTheme({
    palette: {
        primary: { main: '#264653' },
        secondary: { main: '#E76F51' },
        background: { default: '#F4A261' },
    },
    typography: { fontFamily: 'Trebuchet MS, sans-serif' },
});

const App = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    padding: '20px',
                    backgroundColor: theme.palette.background.default,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                {!isSmallScreen && <Navbar />}
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

export default App;

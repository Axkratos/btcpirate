import React from 'react';
import { Box, Typography, Paper, IconButton, Grid, Divider } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import ExploreIcon from '@mui/icons-material/Explore';

const AboutUs = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100%"
            p={3}
            sx={{
                backgroundColor: '#264653',
                margin: 0,
                color: '#F4A261',
                boxSizing: 'border-box',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: '100%',
                    maxWidth: '900px',
                    backgroundColor: '#E9C46A',
                    padding: '30px',
                    borderRadius: '12px',
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ color: '#264653', fontWeight: 'bold', marginBottom: '30px' }}
                >
                    About Us
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <ExploreIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                Discover Hidden Bitcoin Treasures
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            Ghost BTC Wallet Hunt is a platform designed for adventurous souls who seek to uncover hidden Bitcoin wallets. Our advanced algorithms test random 12-word seed phrases, each one a potential key to unlock lost treasures.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <SecurityIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                Safe & Secure Hunting Grounds
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            Whether you're a seasoned crypto enthusiast or a curious explorer, Ghost BTC Wallet Hunt offers an exciting and innovative way to engage with the Bitcoin blockchain. The hunt is safe, secure, and full of mystery.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <WalletIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                Join the Hunt Today!
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            We are committed to transparency, security, and user satisfaction. Dive into the hunt, and you might be the next to uncover a hidden Bitcoin wallet. Ready to start the adventure?
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{ color: '#264653', marginTop: '30px' }}
                        >
                            For more information, reach out at{' '}
                            <a href="mailto:noor.jsdivs@gmail.com" style={{ color: '#F4A261', textDecoration: 'none' }}>
                                certifiedweeb269@gmail.com
                            </a>.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, backgroundColor: '#F4A261' }} />
            </Paper>
        </Box>
    );
};

export default AboutUs;

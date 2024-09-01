import React from 'react';
import { Box, Typography, Paper, IconButton, Grid, Divider, Fade, Slide } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LockIcon from '@mui/icons-material/Lock';
import UpdateIcon from '@mui/icons-material/Update';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const PrivacyPolicy = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100%"
            p={3}
            sx={{ backgroundColor: '#264653', margin: 0, color: '#F4A261', boxSizing: 'border-box' }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: '90%',
                    maxWidth: '800px',
                    backgroundColor: '#E9C46A',
                    padding: '20px',
                    borderRadius: '12px',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                    maxHeight: '90vh',
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ color: '#264653', fontWeight: 'bold', marginBottom: '20px' }}
                >
                    Privacy Policy
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Slide direction="left" in={true} timeout={1000}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                    <SecurityIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                                </IconButton>
                                <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                    1. Information Collection
                                </Typography>
                            </Box>
                        </Slide>
                        <Fade in={true} timeout={1500}>
                            <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                                We collect information when you visit our site, register, or engage in our treasure-hunting activities. This may include your email address, IP address, and interaction data.
                            </Typography>
                        </Fade>
                    </Grid>

                    <Grid item xs={12}>
                        <Slide direction="right" in={true} timeout={2000}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                    <PrivacyTipIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                                </IconButton>
                                <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                    2. Use of Information
                                </Typography>
                            </Box>
                        </Slide>
                        <Fade in={true} timeout={2500}>
                            <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                                We use the information to improve our services, send updates, and ensure a better hunting experience. We do not share your information with third parties without your consent.
                            </Typography>
                        </Fade>
                    </Grid>

                    <Grid item xs={12}>
                        <Slide direction="left" in={true} timeout={3000}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                    <LockIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                                </IconButton>
                                <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                    3. Data Security
                                </Typography>
                            </Box>
                        </Slide>
                        <Fade in={true} timeout={3500}>
                            <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                                We implement security measures to protect your data, but please note that no method of transmission over the internet is 100% secure.
                            </Typography>
                        </Fade>
                    </Grid>

                    <Grid item xs={12}>
                        <Slide direction="right" in={true} timeout={4000}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                    <UpdateIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                                </IconButton>
                                <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                    4. Changes to Privacy Policy
                                </Typography>
                            </Box>
                        </Slide>
                        <Fade in={true} timeout={4500}>
                            <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                                We may update this Privacy Policy from time to time. We encourage you to review it periodically.
                            </Typography>
                        </Fade>
                    </Grid>

                    <Grid item xs={12}>
                        <Slide direction="left" in={true} timeout={5000}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                    <ContactMailIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                                </IconButton>
                                <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                    5. Contact Us
                                </Typography>
                            </Box>
                        </Slide>
                        <Fade in={true} timeout={5500}>
                            <Typography variant="body1" align="center" sx={{ color: '#264653' }}>
                                If you have any questions, please contact us at{' '}
                                <a href="mailto:noor.jsdivs@gmail.com" style={{ color: '#F4A261', textDecoration: 'none' }}>
                                    certifiedweeb269@gmail.com
                                </a>.
                            </Typography>
                        </Fade>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, backgroundColor: '#F4A261' }} />
            </Paper>
        </Box>
    );
};

export default PrivacyPolicy;

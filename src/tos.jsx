import React from 'react';
import { Box, Typography, Paper, Divider, IconButton, Grid } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import UpdateIcon from '@mui/icons-material/Update';

const TermsOfService = () => {
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
                    Terms of Service
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <GavelIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                User Responsibilities
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            You agree to use the site in a lawful manner and not engage in activities that could harm others.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <VerifiedUserIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                Service Availability
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            We strive to keep the service running smoothly, but we do not guarantee uninterrupted access.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <ReportProblemIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                Limitation of Liability
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            We are not liable for any damages arising from the use of our services.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <IconButton sx={{ backgroundColor: '#2A9D8F', p: 1, mr: 2 }}>
                                <UpdateIcon sx={{ color: '#F4A261', fontSize: 30 }} />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#264653', fontWeight: 'bold' }}>
                                Amendments
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#264653', marginBottom: '20px' }}>
                            We reserve the right to change these terms at any time. Continued use of the site constitutes acceptance of the new terms.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, backgroundColor: '#F4A261' }} />

                <Typography variant="body2" align="center" sx={{ color: '#264653' }}>
                    For more information, reach out at{' '}
                    <a href="mailto:noor.jsdivs@gmail.com" style={{ color: '#F4A261', textDecoration: 'none' }}>
                        certifiedweeb269@gmail.com
                    </a>
                </Typography>
            </Paper>
        </Box>
    );
};

export default TermsOfService;

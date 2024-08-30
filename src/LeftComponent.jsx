import React from 'react';
import { Box, Typography, Paper, Collapse } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/system';

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
}));

const HowItWorks = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh" // Ensure the container takes up the full viewport height
            p={2}
        >
            <Collapse in={true} timeout={1000}>
                <Paper elevation={5} style={{ padding: '20px', backgroundColor: '#F4A261', borderRadius: '8px' }}>
                    <SectionTitle variant="h5">
                        <HelpOutlineIcon style={{ marginRight: '10px', color: '#E76F51' }} />
                        How It Works
                    </SectionTitle>
                    <Typography variant="body1" style={{ color: '#264653', marginBottom: '10px' }}>
                        Our system tests random 12-word seed phrases to find hidden Bitcoin wallets. Here's a simplified process:
                    </Typography>
                    <Box mt={2}>
                        <Typography variant="h6" style={{ color: '#264653' }}>1. Word Extraction</Typography>
                        <Typography variant="body2" style={{ color: '#264653' }}>
                            We extract words from a PDF to form seed phrases.
                        </Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant="h6" style={{ color: '#264653' }}>2. Combination Generation</Typography>
                        <Typography variant="body2" style={{ color: '#264653' }}>
                            The system generates random 12-word combinations.
                        </Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant="h6" style={{ color: '#264653' }}>3. Address Creation & Balance Check</Typography>
                        <Typography variant="body2" style={{ color: '#264653' }}>
                            Each combination creates a Bitcoin address, checked for a balance.
                        </Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant="h6" style={{ color: '#264653' }}>4. Success Logging</Typography>
                        <Typography variant="body2" style={{ color: '#264653' }}>
                            Wallets with a positive balance are logged and displayed.
                        </Typography>
                    </Box>
                </Paper>
            </Collapse>
        </Box>
    );
};

export default HowItWorks;

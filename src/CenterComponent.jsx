import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Paper, Grid, Dialog, DialogContent, DialogActions, IconButton, Card, CardContent } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { styled } from '@mui/system';

// Styled components
const TornCard = styled(Card)(({ theme }) => ({
    background: 'url(https://example.com/torn-paper-texture.jpg) no-repeat center center',
    backgroundSize: 'cover',
    borderRadius: '8px',
    border: '2px solid #264653',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        width: 'calc(100% + 20px)',
        height: 'calc(100% + 20px)',
        background: 'url(https://example.com/torn-edge.png) no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
    }
}));

const LogEntry = styled(Box)(({ theme }) => ({
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: '#E9C46A',
    marginBottom: '8px',
    border: '1px solid #264653',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2)',
}));

const CenterComponent = () => {
    const [isTesting, setIsTesting] = useState(false);
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const startTesting = async () => {
        const newUserId = Math.random().toString(36).substring(2, 15);
        setUserId(newUserId);
        setDialogMessage('Remember to use only Ghost Wallet funds. Do not use other users\' funds!');
        setOpenDialog(true);

        try {
            setLoading(true);
            await axios.post('https://btcpirate-captain-snow-689.fly.dev/start', { user_id: newUserId });
            setIsTesting(true);
        } catch (error) {
            console.error('Error starting testing:', error);
        } finally {
            setLoading(false);
        }
    };

    const stopTesting = async () => {
        setDialogMessage('Hunt stopped!');
        setOpenDialog(true);

        try {
            await axios.post('https://btcpirate-captain-snow-689.fly.dev/stop', { user_id: userId });
            setIsTesting(false);
        } catch (error) {
            console.error('Error stopping testing:', error);
        }
    };

    useEffect(() => {
        if (isTesting) {
            const intervalId = setInterval(fetchLogs, 5000);
            return () => clearInterval(intervalId);
        }
    }, [isTesting, userId]);

    const fetchLogs = async () => {
        if (!userId) return;
        try {
            const response = await axios.get('https://btcpirate-captain-snow-689.fly.dev/log', { params: { user_id: userId } });
            const fetchedLogs = response.data.logs || [];
            const sortedLogs = fetchedLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setLogs(sortedLogs.slice(0, 10));
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    };

    useEffect(() => {
        const handleBeforeUnload = async (event) => {
            if (userId) {
                try {
                    await axios.post('https://btcpirate-captain-snow-689.fly.dev/delete_log', { user_id: userId });
                    console.log('Log deletion request sent');
                } catch (error) {
                    console.error('Error sending log deletion request:', error);
                }
            }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [userId]);
    

    return (
        <Paper elevation={5} style={{ height: '100%', backgroundColor: '#2A9D8F', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" align="center" style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '20px' }}>
                Ghost BTC Wallet Hunt
            </Typography>
            <Typography variant="h6" align="center" style={{ color: '#FFFFFF', marginBottom: '30px' }}>
                Searching for hidden treasures in the Bitcoin blockchain
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={startTesting}
                        disabled={isTesting || loading}
                        startIcon={<WalletIcon />}
                        style={{ fontWeight: 'bold' }}
                    >
                        Start
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={stopTesting}
                        disabled={!isTesting || loading}
                        style={{ fontWeight: 'bold' }}
                    >
                        Stop
                    </Button>
                </Grid>
            </Grid>
            {loading && (
                <Box textAlign="center" mt={4}>
                    <CircularProgress />
                </Box>
            )}
            <Box mt={4}>
                <Typography variant="h5" gutterBottom style={{ color: '#FFFFFF' }}>
                    Recent Logs
                </Typography>
                <TornCard elevation={3}>
                    <CardContent>
                        <TransitionGroup>
                            {logs.map((log, index) => (
                                <CSSTransition key={index} timeout={500} classNames="log">
                                    <LogEntry key={index}>
                                        <Typography variant="body2">
                                            <strong>{log.address}</strong> - {log.balance} BTC
                                        </Typography>
                                    </LogEntry>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </CardContent>
                </TornCard>
            </Box>

            {/* Dialog Box */}
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                PaperProps={{
                    style: {
                        backgroundColor: '#F4A261',
                        borderRadius: '10px',
                        padding: '20px',
                        position: 'relative',
                        border: '3px solid #264653'
                    }
                }}
            >
                <DialogContent>
                    <Typography variant="h6" align="center" style={{ fontWeight: 'bold', color: '#264653' }}>
                        {dialogMessage}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpenDialog(false)}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default CenterComponent;

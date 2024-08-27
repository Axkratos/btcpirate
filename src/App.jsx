import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Grid, Paper, Box, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; // Import the CSS file for animations

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50', // Green for start button
        },
        secondary: {
            main: '#f44336', // Red for stop button
        },
        background: {
            default: '#f0f2f5', // Light gray background
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const App = () => {
    const [isTesting, setIsTesting] = useState(false);
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);
    const [ethicalNotification, setEthicalNotification] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await axios.get('https://btcpirate-dry-wind-3478.fly.dev/testing_status');
                setIsTesting(response.data.testingRunning);
            } catch (error) {
                console.error('Error fetching testing status:', error);
            }
        };
        fetchStatus();
    }, []);

    const generateRandomUserId = () => {
        return Math.floor(Math.random() * 10000000000) + 1; // Generate a number between 1 and 10,000,000,000
    };

    const startTesting = async () => {
        const newUserId = generateRandomUserId();
        setUserId(newUserId);
        
        try {
            setLoading(true);
            await axios.post('https://btcpirate-dry-wind-3478.fly.dev/start', { user_id: newUserId });
            checkTestingStatus();
            // Trigger the ethical notification when starting testing
            setEthicalNotification(true);
        } catch (error) {
            console.error('Error starting BTC testing:', error);
            setDialogContent('Failed to start testing. Please try again later.');
            setDialogOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const stopTesting = async () => {
      try {
          await axios.post('https://btcpirate-dry-wind-3478.fly.dev/stop', { user_id: userId }, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          setIsTesting(false);
          setDialogContent('Testing stopped successfully.');
      } catch (error) {
          console.error('Error stopping BTC testing:', error);
          setDialogContent('Failed to stop testing. Please try again later.');
      } finally {
          setDialogOpen(true);
      }
  };

    const checkTestingStatus = async () => {
        try {
            const response = await axios.get('https://btcpirate-dry-wind-3478.fly.dev/testing_status');
            setIsTesting(response.data.testingRunning);
        } catch (error) {
            console.error('Error checking testing status:', error);
        }
    };

    const fetchLogs = async () => {
        if (!userId) return;
        try {
            const response = await axios.get('https://btcpirate-dry-wind-3478.fly.dev/logs', { params: { user_id: userId } });
            const fetchedLogs = response.data.logs;
            const sortedLogs = fetchedLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            // Limit to the 10 most recent logs
            setLogs(sortedLogs.slice(0, 10));
        } catch (error) {
            console.error('Error fetching logs:', error);
            setDialogContent('Failed to fetch logs. Please try again later.');
            setDialogOpen(true);
        }
    };

    useEffect(() => {
        if (isTesting) {
            const intervalId = setInterval(fetchLogs, 5000);
            return () => clearInterval(intervalId);
        }
    }, [isTesting]);

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleCloseEthicalNotification = () => {
        setEthicalNotification(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" style={{ backgroundColor: theme.palette.background.default, padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box mt={4}>
                    <Typography variant="h3" gutterBottom align="center" style={{ color: theme.palette.primary.main }}>Ghost BTC Wallet Hunt</Typography>
                    <Typography variant="h6" align="center" style={{ marginBottom: '20px', color: '#555' }}>Searching for hidden treasures in the Bitcoin blockchain</Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={startTesting}
                                disabled={isTesting}
                                startIcon={<WalletIcon />}
                                style={{ fontWeight: 'bold' }}
                            >
                                Start Testing
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={stopTesting}
                                disabled={!isTesting}
                                style={{ fontWeight: 'bold' }}
                            >
                                Stop Testing
                            </Button>
                        </Grid>
                    </Grid>
                    {loading && (
                        <Box textAlign="center" mt={4}>
                            <CircularProgress />
                        </Box>
                    )}
                    <Box mt={4}>
                        <Typography variant="h5" gutterBottom>
                            Recent Logs
                        </Typography>
                        <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}>
                            <TransitionGroup>
                                {logs.map((log, index) => (
                                    <CSSTransition key={index} timeout={500} classNames="log">
                                        <Box key={index} mb={2} style={{ padding: '8px', borderRadius: '4px', backgroundColor: '#e3f2fd' }}>
                                            <Typography variant="body2">
                                                <strong>{new Date(log.timestamp).toLocaleString()}</strong> - Address: {log.address} - Balance: {log.balance} BTC
                                            </Typography>
                                        </Box>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </Paper>
                    </Box>
                </Box>
                <Dialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Alert
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            {dialogContent}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                {ethicalNotification && (
                    <Dialog
                        open={ethicalNotification}
                        onClose={handleCloseEthicalNotification}
                        aria-labelledby="ethical-dialog-title"
                        aria-describedby="ethical-dialog-description"
                    >
                        <DialogTitle id="ethical-dialog-title">
                            Ethical Notice
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant="body1">
                                Please ensure ethical usage of this tool. Only keep the BTC of ghost wallets. If you find a wallet that belongs to someone, contact them and handle the situation responsibly.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseEthicalNotification} color="primary">
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </ThemeProvider>
    );
};

export default App;
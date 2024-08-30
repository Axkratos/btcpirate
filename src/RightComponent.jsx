import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MessageIcon from '@mui/icons-material/Message';
import { styled } from '@mui/system';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
}));

const MessageTitle = styled(Typography)(({ theme }) => ({
    color: '#E76F51',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
}));

const RightComponent = () => {
    const [copied, setCopied] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const btcAddress = "bc1qj68yxma2p67dpr25zgrt64vy2mljcxkrl9mum3";

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Paper elevation={5} style={{ height: '100%', backgroundColor: '#E9C46A', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" flexGrow={1}>
                <Box mb={isSmallScreen ? 1 : 2}>
                    <Title variant="h5">
                        <FileCopyIcon style={{ marginRight: '10px', fontSize: '30px', color: '#E76F51' }} />
                        Support the Hunt
                    </Title>
                    <Typography variant="body1" style={{ color: '#264653', marginBottom: '10px' }}>
                        Our site is free, but running it isn't. If you enjoy our service, consider donating to help us keep the hunt alive!
                    </Typography>
                    <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '8px', marginBottom: '10px' }}>
                        <Typography variant="body2" style={{ color: '#264653', wordWrap: 'break-word' }}>
                            {btcAddress}
                        </Typography>
                    </Paper>
                    <CopyToClipboard text={btcAddress} onCopy={handleCopy}>
                        <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                            <Button variant="contained" color="primary" startIcon={<FileCopyIcon />}>
                                {copied ? "Copied" : "Copy BTC Address"}
                            </Button>
                        </Tooltip>
                    </CopyToClipboard>
                </Box>
                {/* Message Section */}
                <Box mt={isSmallScreen ? 2 : 3}>
                    <MessageTitle variant="h6">
                        <MessageIcon style={{ marginRight: '10px', fontSize: '25px', color: '#264653' }} />
                        Why We Provide This Tool
                    </MessageTitle>
                    <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
                        <Typography variant="body2" style={{ color: '#264653' }}>
                            It's a matter of luck to find a ghost wallet. Even if we wanted to monopolize it, we couldn't. So, why not let luck decide? And don't worry, we won't access any of your wallets or anything. Just run it in your browser and leave.
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Paper>
    );
};

export default RightComponent;

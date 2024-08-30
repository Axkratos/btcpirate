import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import TreasureIcon from '@mui/icons-material/LocalAtm';
import CoinIcon from '@mui/icons-material/MonetizationOn'; // Use a coin-related icon

const Navbar = () => {
    const numTexts = 5;
    const scrollDuration = 15; // Duration of the scroll animation in seconds
    const [texts, setTexts] = useState(generateInitialTexts());

    useEffect(() => {
        const interval = setInterval(() => {
            setTexts(prevTexts => [
                ...prevTexts.slice(1),
                generateRandomText()
            ]);
        }, scrollDuration * 1000); // Update after the scroll duration ends

        return () => clearInterval(interval);
    }, []);

    function generateInitialTexts() {
        const textsArray = [];
        for (let i = 0; i < numTexts; i++) {
            textsArray.push(generateRandomText());
        }
        return textsArray;
    }

    function generateRandomText() {
        const userId = generateRandomUserId();
        const amount = (Math.random() * (2 - 0.1) + 0.1).toFixed(2);
        return `User_${userId} Got ${amount}`;
    }

    function generateRandomUserId() {
        const characters = 'abcdefghijklmnopqrstuvwxyz123456789';
        let result = '';
        const length = 8;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    return (
        <AppBar position="static" style={{ backgroundColor: 'rgba(255, 165, 0, 0.3)', boxShadow: 'none' }}>
            <Toolbar style={{ justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
                <IconButton edge="start" color="inherit" aria-label="treasure">
                    <TreasureIcon />
                </IconButton>
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <div
                        style={{
                            display: 'flex',
                            animation: `scroll ${scrollDuration}s linear infinite`,
                            minWidth: '100%',
                        }}
                    >
                        {texts.map((text, index) => (
                            <Typography
                                key={index}
                                variant="h6"
                                style={{
                                    color: '#000', // Set text color to black for contrast with the lighter background
                                    paddingRight: '20px', // Space between texts
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {text} <CoinIcon style={{ marginLeft: '8px' }} /> {/* Replace with Coin icon */}
                            </Typography>
                        ))}
                    </div>
                </div>
            </Toolbar>

            {/* CSS for scrolling effect */}
            <style>
                {`
                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                     body {
                    margin: 0;
                    overflow-x: hidden; /* Prevent horizontal overflow */
                }
                `}
            </style>
        </AppBar>
    );
};

export default Navbar;

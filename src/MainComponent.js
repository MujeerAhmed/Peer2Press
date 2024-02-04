import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import {
    appWrapper,
    contentWrapper,
    sideBarWrapper,
    contentAreaWrapper,
    scrollListWrapper,
    createAccountWrapper,
    joinRedditWrapper,
} from '@styles/styles';
import SideList from '@components/SideList';
import { blue, grey } from '@mui/material/colors';
import { Typography } from '@mui/material';
import CustomButton from '@shared/CustomButton';
import AppContentArea from '@components/AppContentArea';
import Navbar from '@navigation/Navbar';


const MainComponent = () => {
    return (
        <Box sx={appWrapper}>
        <Navbar />
        <Box sx={contentWrapper}>
            <Box sx={sideBarWrapper}>
                <Box sx={scrollListWrapper}>
                    <SideList />
                </Box>
                <Box sx={createAccountWrapper}>
                    <Box sx={joinRedditWrapper}>
                        <Typography sx={{ mb: 2 }} variant="body2" gutterBottom>
                            Create an account to follow your favorite communities and
                            start taking part in conversations.
                        </Typography>
                        <CustomButton
                            bgColor={blue[300]}
                            color={grey[900]}
                            text="Join P2P"
                            fullWidth
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={contentAreaWrapper}>
                <AppContentArea />
            </Box>
        </Box>
        </Box>
    );
};

export default MainComponent;
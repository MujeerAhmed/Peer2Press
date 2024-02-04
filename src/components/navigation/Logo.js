import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BsQuestionSquare } from 'react-icons/bs';
import { flexAlignCenter, logoText } from '@styles/styles';

const Logo = () => {
  return (
    <Box sx={flexAlignCenter}>
      <BsQuestionSquare size={32} />
      <Typography variant="h6" component="div" sx={logoText}>
        Peer2Press
      </Typography>
    </Box>
  );
};

export default Logo;

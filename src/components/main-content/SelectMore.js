import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from 'react-icons/bs';
import useToggle from '@hooks/useToggle';
import { switchLayoutBtn } from '@styles/styles';

const SelectMore = () => {
  const { el, open, handleClick, handleClose } = useToggle();

  return (
    <div>
      <Button id="city-select" sx={switchLayoutBtn} onClick={handleClick}>
        <BsThreeDots size={18} />
      </Button>
      <Menu
        id="city-select-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'city-select',
        }}
      >
        <MenuItem onClick={handleClose}>Rising</MenuItem>
        <MenuItem onClick={handleClose}>Most Popular</MenuItem>
        <MenuItem onClick={handleClose}>Most Watched</MenuItem>
      </Menu>
    </div>
  );
};

export default SelectMore;

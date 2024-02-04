import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { selectCountryBtn } from '@styles/styles';
import useToggle from '@hooks/useToggle';

const CountrySelect = () => {
  const { el, open, handleClick, handleClose } = useToggle();

  return (
    <div>
      <Button id="city-select" sx={selectCountryBtn} onClick={handleClick}>
        Bangalore {open ? <BiChevronUp /> : <BiChevronDown />}
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
        <MenuItem onClick={handleClose}>Mumbai</MenuItem>
        <MenuItem onClick={handleClose}>Delhi</MenuItem>
        <MenuItem onClick={handleClose}>Chennai</MenuItem>
      </Menu>
    </div>
  );
};

export default CountrySelect;

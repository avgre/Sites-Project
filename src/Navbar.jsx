import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi-light/menu';
import homeIcon from '@iconify/icons-mdi-light/home';
import accountIcon from '@iconify/icons-mdi-light/account';

const StyledTitle = styled('img')`
  && {
    position: relative;
    height: 25px;
    width: 150px;
    z-index: 1;
  }
`;
const StyledNavbar = styled('div')`
  && {
    position: absolute;
    display: flex;
    z-index: 2;
    height: 60px;
    width: 360px;
  }
`;
const NavBlack = styled('div')`
  background: black;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavRed = styled('div')`
  background: #e6000f;
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Spacer = styled('div')`
  position: relative;
  height: 60px;
  width: 360px;
  background-color: black;
`;

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <NavRed>
          <Icon
            icon={menuIcon}
            style={{ color: 'white', fontSize: '35px', padding: '10px' }}
          />
          <StyledTitle src={'/images/logo-black.svg'} />
          <Link to="list">
            <Icon
              icon={homeIcon}
              style={{ color: 'white', fontSize: '35px', padding: '10px' }}
            />
          </Link>
        </NavRed>
        <NavBlack>
          <Link to="account">
            <Icon
              icon={accountIcon}
              style={{ color: 'white', fontSize: '35px' }}
            />
          </Link>
        </NavBlack>
      </StyledNavbar>
      <Spacer />
    </>
  );
}

export default Navbar;

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo onClick={() => scroll.scrollToTop()}>My Portfolio</Logo>
      <Menu>
        <MenuItem>
          <Link to="home" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faHome} />  HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="about" smooth={true} duration={500}><FontAwesomeIcon icon={faUser} />  About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="projects" smooth={true} duration={500}><FontAwesomeIcon icon={faFolder} /> Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="contact" smooth={true} duration={500}><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem; /* Adjust padding as needed */
  background: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 80px;
  animation: ${fadeIn} 1s ease-out; /* Apply animation */
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 50px; /* Move items to the right side */
`;

const MenuItem = styled.li`
  margin: 0 5rem;
  font-size: 20px;
  font-weight: bold;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navbar;


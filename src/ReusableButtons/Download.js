// src/ReusableButtons/Download.js
import React from 'react';
import styled from 'styled-components';
import resume from '../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Download = () => {
  return (
    <ButtonWrapper>
      <a href={resume} download>
        <Button>
        <FontAwesomeIcon icon={faDownload} />Download Resume
        </Button>
      </a>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin-left: 1px; /* Adjust this value to move the button to the right */
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:hover {
    background-color: grey;
  }

  svg {
    margin-right: 8px;
  }
`;

export default Download;

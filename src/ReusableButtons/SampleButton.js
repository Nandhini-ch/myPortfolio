// src/ReusableButtons/SampleButton.js
import React from 'react';
import styled from 'styled-components';

const SampleButton = ({ name, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>{name}</Button>
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
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    background-color: grey;
  }

  svg {
    margin-right: 8px;
  }
`;

export default SampleButton;

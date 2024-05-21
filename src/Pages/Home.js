import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../assets/main.jpg';
import Download from '../ReusableButtons/Download';

const Home = () => {
  return (
    <Section id="home">
      <ContentWrapper>
        <LeftSide>
          <AnimatedText1>HI Hello<p>I'm Nandini.ch</p></AnimatedText1>
          <AnimatedText2>Software Developer<br/>(2022 - Present)</AnimatedText2>
          <ButtonWrapper>
            <Download />
          </ButtonWrapper>
        </LeftSide>
      </ContentWrapper>
    </Section>
  );
};

const fadeIn1 = keyframes`
  from {
    color: black;
    margin-bottom: -40px;
  }

  30% {
    letter-spacing: 15px;
    margin-bottom: -40px;
  }

  85% {
    letter-spacing: 5px;
    margin-bottom: -40px;
  }
`;

const fadeIn2 = keyframes`
  from {
    color: black;
    margin-bottom: -40px;
  }

  30% {
    letter-spacing: 25px;
    margin-bottom: -40px;
  }

  85% {
    letter-spacing: 5px;
    margin-bottom: -40px;
  }
`;

const Section = styled.section`
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%; /* Adjust width as needed */
`;

const LeftSide = styled.div`
  font-size: 30px;
  color: #fff;
`;

const AnimatedText1 = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  position: relative;
  animation: ${fadeIn1} 3s 1;
`;

const AnimatedText2 = styled.h2`
  font-size: 60px;
  position: relative;
  animation: ${fadeIn2} 3s 1;
`;

const ButtonWrapper = styled.div`
  margin-right: -50px; /* Adjust this value to move the button to the left */
`;

export default Home;

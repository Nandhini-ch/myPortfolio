// src/Pages/About.js
import React from 'react';
import styled from 'styled-components';
import profilePicture from '../assets/profile-image.jpg'; // Adjust the path to your image
import { Link } from 'react-scroll';
import SampleButton from '../ReusableButtons/SampleButton';

// Paths to your language images
import languageImage1 from '../assets/language1.jpg';
import languageImage2 from '../assets/language2.jpg';
import languageImage3 from '../assets/language3.jpg';
import languageImage4 from '../assets/language4.jpg';
import languageImage5 from '../assets/language5.jpg';
import languageImage6 from '../assets/language6.jpg';
import languageImage7 from '../assets/language7.jpg';
import languageImage8 from '../assets/language8.jpg';
import languageImage9 from '../assets/language9.jpg';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <ImageWrapper>
          <ProfileImage src={profilePicture} alt="Profile" />
        </ImageWrapper>
        <Content>
          <h1 style={{ textAlign: 'center' }}><u>About Me</u></h1>
          <StyledList>
            <li>Experienced Elixir/Phoenix developer with over 2 years of expertise in building robust and scalable back-end systems.</li>
            <li>Additionally, I have 1 year of experience developing small features using React.</li>
            <li>Eager to expand my front-end skills to complement my back-end proficiency.</li>
            <li>Passionate about crafting seamless user experiences and leveraging emerging technologies.</li>
            <li>Quick to adapt to new methodologies with a keen eye for detail and a commitment to high-quality solutions.</li>
          </StyledList>
          <h1 style={{ textAlign: 'center' }}><u>SKILLS</u></h1>
          <LanguagesGrid>
            <LanguageImage src={languageImage1} alt="Language 1" />
            <LanguageImage src={languageImage2} alt="Language 2" />
            <LanguageImage src={languageImage3} alt="Language 3" />
            <LanguageImage src={languageImage4} alt="Language 4" />
            <LanguageImage src={languageImage5} alt="Language 5" />
            <LanguageImage src={languageImage6} alt="Language 6" />
            <LanguageImage src={languageImage7} alt="Language 7" />
            <LanguageImage src={languageImage8} alt="Language 8" />
            <LanguageImage src={languageImage9} alt="Language 9" />
          </LanguagesGrid>
          <br/>
          <CenteredLink to="contact" smooth={true} duration={500}>
            <SampleButton name="Contact Me" />
          </CenteredLink>
          <br/>
        </Content>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  margin-right: 400px;
`;

const ImageWrapper = styled.div`
  flex: 2;
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 2;
  padding: ;
  text-align: left;
  margin-left: 10rem; /* Add margin-left to move content to the right */

  h1 {
    margin-bottom: 1rem;
    color: white;
  }
`;

const StyledList = styled.ul`
  font-size: 20px;
  color: white;
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const LanguagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const LanguageImage = styled.img`
  width: 100px; /* Adjust the width and height as needed */
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1); /* Slightly enlarge the image on hover */
    box-shadow: 0 0 10px red; /* Add a red shadow to highlight the image */
  }
`;

const CenteredLink = styled(Link)`
  display: flex;
  justify-content: center;

`;

export default About;

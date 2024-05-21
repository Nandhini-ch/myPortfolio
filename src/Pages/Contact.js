import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faComments } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import backgroundImage from '../assets/test.jpg';

const Contact = () => {
  return (
    <Section id="contact">
      <Content>
        <p>Contact me through the details given below.</p>
        <ContactInfo>
          <ContactItem>
            <Icon icon={faEnvelope} />
            <span>challakolusunandini20@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <Icon icon={faPhone} />
            <span>+91 0000000000</span>
          </ContactItem>
          <ContactItem>
            <Icon icon={faComments} />
            <span>Let's Chat</span>
          </ContactItem>
        </ContactInfo>
        <SocialMedia>
          <a href="https://wa.me/your-phonenumber" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </SocialMedia>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 1rem;
  background: #333;
  background: url(${backgroundImage}) no-repeat center center/cover;
`;

const Content = styled.div`
  max-width: 600px;
  color: white;
  margin: 0 auto; /* Center the content horizontally */
  text-align: right; /* Align content to the right */
  font-size: 30px; /* Increase font size */
  margin-right: 20px; /* Add right margin */
`;


const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: right;
  gap: 5px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #007bff; /* Adjust icon color */
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 30px; /* Adjust icon size */
  margin-top: 20px;
`;

export default Contact;

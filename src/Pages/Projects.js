import React from 'react';
import styled from 'styled-components';
import inconn from '../assets/inconn.jpg';
import asset from '../assets/asset.jpg';
import resume from '../assets/resume.jpg';
import inventory from '../assets/inventory.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <Section id="projects">
      
      <Container>
        <CardContent>
          <h1 style={{ fontSize: '40px' }}><u>My Projects</u></h1>
          <h2>*Inconn(Backend Developer-Elixir Developer)</h2>
          <p style={{ fontSize: '20px' }}>InConn is an intuitive, user-configurable, and ready-todeploy comprehensive Asset Management platform that comes prebuilt with IOT</p>
          <h2>*Asset And inventory Management(React Developer)</h2>
          <p style={{ fontSize: '20px' }}> IoT integration. Unleash the full power of automation with mobility, and it allows user to easily track and control all assets, related inventory and workforce of your business even</p>
          <h2>*Resume(Reactjs)</h2>
          <p style={{ fontSize: '20px' }}>Simple Resume using Reactjs</p>
          <h2> *Github Url <FontAwesomeIcon icon={faGithub} /></h2>
          <StyledLink href="https://github.com/Nandhini-ch" target="_blank"><u style={{fontSize: '20px'}}>Visit My Github Profile!</u></StyledLink>
        </CardContent>
        <CardGrid>
          <Row>
            <Card>
              <Image src={inconn} alt="Project 1" />
            </Card>
            <Card>
              <Image src={asset} alt="Project 2" />
            </Card>
          </Row>
          <Row>
            <Card>
              <Image src={resume} alt="Project 3" />
            </Card>
            <Card>
              <Image src={inventory} alt="Project 4" />
            </Card>
          </Row>
        </CardGrid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e4e4e4;
  padding: 2rem;
  background: #333;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  color: white;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: adjust;
`;

const CardContent = styled.div`
  flex: 1;
  margin-right: 300px;
  width: 500px;
`;

const StyledLink = styled.a`
  color: white; /* Changes the link color to white */
  text-decoration: none;

  &:hover {
    color: red; /* Optional: Changes color on hover */
  }
`;

export default Projects;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Title = styled.div`
  font-size: 4.25rem;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
`;

const SecondTitle = styled.div`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
`;

const SectionOne = styled.div`
  width: 50%;
  height: 414px;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const SectionTwo = styled.div`
  width: 50%;
  height: 520px;
  padding: 20px;
  margin-top: 10px;
  position: relative;
`;

const IntroImage1 = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  width: 85%;
  height: auto;
`;

const IntroImage2 = styled.img`
  position: absolute;
  left: 10px;
  top: 250px;
  border-radius: 50%;
  width: 40%;
  height: auto;
`;

const Section = styled.div`
  background-color: white;
  border-radius: 10px;
  border: none;
  width: 85%;
  margin-top: 30px;
  height: 650px;
  margin-bottom: 30px;
`;

const Row = styled.div`
  width: 33%;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MediumPara = styled.div`
  font-size: 1.25rem;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const Button = styled.button`
  color: white;
  background-color: #1ea7fd;
  border: none;
  border-radius: 10px;
  padding: 10px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  width: 170px;
  outline: none;
`;

const Blue = styled.span`
  color: #1ea7fd;
  font-weight: 900;
`;

const SpacedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;
const BlueExpress = styled.span`
  font-family: 'Leckerli One', cursive;
  color: #1ea7fd;
  margin-left: 5px;
  margin-right: 5px;
`;

const Footer = styled.footer`
  border-top: 10px solid #1ea7fd;
  height: 265px;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  font-size: 2rem;
`;

const Logo = styled.div`
  color: white;
  font-size: 4em;
  padding: 0.25em;
  border-radius: 10px;
  font-family: 'Leckerli One', cursive;
`;

const FooterTitles = styled.span`
  margin-top: 30px;
  font-size: 1.55rem;
  font-weight: 700;
  color: white;
`;

const FooterSect = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.1rem;
`;
const Copyright = styled.div`
  font-size: 0.5 rem;
  display: flex;
  flex-direction: column-reverse row-reverse;
  color: white;
  position: absolute;
  top: 200px;
`;

const GroomerImg = styled.img`
  border-radius: 10px;
  height: auto;
  margin: auto;
  width: 75%;
`;

const Spacing = styled.div`
  margin-bottom: 5px;
`;

const Caption = styled.div`
  margin: 15px;
  margin-left: 45px;
  margin-right: 45px;
`;

const Poodle = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const LandingContainer = () => {
  return (
    <div>
      <Container>
        <Section>
          <Title>
            <BlueExpress>Express Groomer</BlueExpress>
          </Title>
          <CenterDiv>
            <SectionOne>
              <div>Grooming on your Schedule</div>
              <SecondTitle>Get Clean, Faster</SecondTitle>
              <MediumPara>
                With Express Groomer you are your own boss. Whether you're a pet
                owner looking for a squeaky clean pet or a Groomer looking to
                add more clients to your business. Your Schedule: Your Rules.
              </MediumPara>
              <div>Changing the way you Groom.</div>
              <SpacedDiv>
                What are you waiting for? Create an Account Now:{' '}
                <Button>Sign Up</Button>
              </SpacedDiv>
            </SectionOne>
            <SectionTwo>
              <IntroImage1
                src={require('./images/golden-bath.jpg')}
                alt="golden retriever"
              ></IntroImage1>
              <IntroImage2
                src={require('./images/shortcoat-smile.jpg')}
                alt="shortcoat dog"
              ></IntroImage2>
            </SectionTwo>
          </CenterDiv>
        </Section>
      </Container>

      <Container>
        <Section>
          <div>Something is going to go here.</div>
          <CenterDiv>
            <Row>
              <SecondTitle>Why Wait?</SecondTitle>
              <MediumPara>
                Appointments at a National Chain Salon can take up to 3 hours.
              </MediumPara>{' '}
              <div>
                {' '}
                Most of that time spent waiting in a crate, surrounded by
                unfamiliar pets and strange noises - then being handled by a
                stranger. With Express Groomer the average appointment lasts
                only 90 minutes - most of that time being spent 1 on 1 with a
                Groomer who can become a familiar face.
              </div>
            </Row>

            <Row>
              <Poodle
                src={require('./images/poodle.jpg')}
                alt="poodle"
              ></Poodle>
            </Row>

            <Row>
              <SecondTitle>Sensitive Skin?</SecondTitle>
              <MediumPara>
                Commercial shampoos contain harsh sulfates that strip your pet's
                coat of its delicate oils.
              </MediumPara>
              <div>
                {' '}
                Our Groomers only use shampoos from pre-approved list of
                products containing natural, moisturizing ingredients that are
                sure to leave your pet with a shiny soft coat. No harsh
                chemicals needed!
              </div>
            </Row>
          </CenterDiv>
          <div>Something is going to go here.</div>
        </Section>
      </Container>

      <Container>
        <Section>
          <CenterDiv>
            <SectionOne>
              <GroomerImg
                src={require('./images/groomer.jpg')}
                alt="groomer"
              ></GroomerImg>
              <Caption>
                All of our Groomers are state certified and licensed, so you
                know your pets are in good hands.
              </Caption>
            </SectionOne>

            <SectionTwo>
              <SecondTitle>We Love Groomers</SecondTitle>
              <MediumPara>
                Whether you're looking to get extra income or start a Freelance
                career, turn your passion for pets into extra income!
              </MediumPara>
              <ul>
                <li>Make your own hours</li>
                <li>Schedule at your convience</li>
                <li>Work as little or as much as you like</li>
                <li>You decide which appointments to accept</li>
                <li>
                  Our client rating system lets you pick the clients right for
                  you
                </li>
              </ul>
              <p>
                Becoming a Groomer with Express Groomer is Easy! Just upload a
                copy of your Groomer's License and ID and one of our
                representitives will reach out for a brief chat.
              </p>
              <p>Earn a $500 bonus after your first 100 appointments</p>
              <SpacedDiv>
                <MediumPara>
                  Interested in Grooming but don't have experience? You may be
                  eligible for our <Blue>New Trainee Program</Blue>
                </MediumPara>
              </SpacedDiv>
            </SectionTwo>
          </CenterDiv>
        </Section>
      </Container>

      <Footer>
        <LogoContainer>
          <Logo>Express Groomer</Logo>
          <SocialContainer>
            <div className="fa fa-facebook"></div>
            <div className="fa fa-twitter"></div>
            <div className="fa fa-instagram"></div>
            <div className="fa fa-youtube"></div>
            <div className="fa fa-reddit"></div>
          </SocialContainer>
        </LogoContainer>

        <FooterSect>
          <FooterTitles>About</FooterTitles>
          <Spacing>Overview</Spacing>
          <Spacing>Press</Spacing>
          <Spacing>Investors</Spacing>
        </FooterSect>
        <FooterSect>
          <FooterTitles>Connect</FooterTitles>
          <Spacing>FAQ</Spacing>
          <Spacing>Help</Spacing>
          <Spacing>Contact Us</Spacing>
        </FooterSect>
        <FooterSect>
          <FooterTitles>Company</FooterTitles>
          <Spacing>Terms</Spacing>
          <Spacing>Privacy Policy</Spacing>
          <Spacing>Careers</Spacing>
        </FooterSect>
        <Copyright>© Copyright - Express Groomer </Copyright>
      </Footer>
    </div>
  );
};

export default LandingContainer;

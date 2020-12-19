import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Title = styled.div`
  font-size: 3.25rem;
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

const Intro = styled.div`
  background-color: white;
  border-radius: 10px;
  border: none;
  width: 85%;
  margin-top: 30px;
  height: 650px;
  margin-bottom: 20px;
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

const LandingContainer = () => {
  return (
    <Container>
      <Intro>
        <Title>
          <BlueExpress>Express Groomer</BlueExpress>
        </Title>
        <CenterDiv>
          <SectionOne>
            <div>Grooming on your Schedule</div>
            <SecondTitle>Get Clean, Faster</SecondTitle>
            <MediumPara>
              With Express Groomer you are your own boss. Whether you're a pet
              owner looking for a squeaky clean pet or a Groomer looking to add
              more clients to your business. Your Schedule: Your Rules.
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
      </Intro>
    </Container>
  );
};

export default LandingContainer;

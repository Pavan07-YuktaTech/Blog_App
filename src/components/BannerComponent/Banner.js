import React from 'react';
import BlogImage from '../../Assets/Images/blogIon.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styled from '@emotion/styled'

const BannerConatainer = styled.div`
background-color: #fac213;
height: 72vh;
margin-top:70px ;
`;

const BannerInner = styled.div`
  display: flex;
  margin: 0 80px;
  justify-content: space-between;
`;

const LeftSide = styled.div``;

const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-family: "Noto Serif", serif;
  font-size: 85px;
  padding: 0;
  margin: 100px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
`;

const Para = styled.p`
    font-size: 25px;
`;

const Button = styled.button`
  width: 170px;
  height: 40px;
  margin: 0 10px;
  border-radius: 30px;
  background-color: black;
  border: none;
  color: aliceblue;
  font-size: medium;
  cursor: pointer;
  margin-top: 25px;
  font-weight: 600;
  cursor: pointer !important;
  letter-spacing: 0.02rem;
`;

const RightSide = styled.div`
  margin-top: 60px;
`;
const Img = styled.img`
    width: 400px;
    border-radius: 30px;
    transform: rotate(10deg);
`;




const Banner = () => {

  const scrollToAllPosts = () => {
    scroll.scrollTo('#all-posts', {
      duration: 500,
      smooth: true,
      offset: -50, 
    });
  };

  return (
    <BannerConatainer>
      <BannerInner>
        <LeftSide>
          <H1>Stay Curious</H1>
          <Para>Discover stories, thinking, and expertise <br/>from writers on any topic.</Para>
          <ScrollLink to="all-posts" smooth={true} duration={500} onClick={scrollToAllPosts}>
            <Button>Start Reading</Button>
          </ScrollLink>
        </LeftSide>
        <RightSide>
          <Img src={BlogImage} alt="Blog" />
        </RightSide>
      </BannerInner>
    </BannerConatainer>
  );
}

export default Banner;

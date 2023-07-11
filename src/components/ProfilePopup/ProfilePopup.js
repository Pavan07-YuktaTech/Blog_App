import React from 'react';
import styled from '@emotion/styled';

const Profilepopup = styled.div`
  position: absolute;
  top: 85%;
  left: 84%;
  transform: translateX(-50%);
  width: 200px;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 999;
`;

const Img = styled.img`
  border-radius: 50%; 
  width: 50px;
  height: 50px;
`;

const HrTag = styled.hr`
  color: rgb(172, 172, 172);
`;
const H3 = styled.h3``;

const Para = styled.p``;

const ProfilePopup = ({ name, email, profilePhoto,id }) => {
  return (
    <Profilepopup>
      <Img src={profilePhoto} alt="Profile" />
      <HrTag/>
      <H3>id:{id}</H3>
      <H3>{name}</H3>
      <Para>{email}</Para>
    </Profilepopup>
  );
};

export default ProfilePopup;

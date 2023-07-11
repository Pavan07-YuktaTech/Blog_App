import React from 'react';
import styled from '@emotion/styled'

const FooterContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px 0;
  text-align: center;
`;

const FooterInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Para = styled.p`
    font-size: 14px;
    color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <Para>pavan.gr@ticketsque.com|YuktaTech Solutions</Para>
        <Para>&copy; 2023 Your Blog App. All rights reserved.</Para>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;

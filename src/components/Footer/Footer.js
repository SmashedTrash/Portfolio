import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem href="tel:+91-9579452403">+91-9579452403</LinkItem>
      </LinkColumn>
      <LinkColumn>
         <LinkTitle>E-mail</LinkTitle>
         <LinkItem href="mailto:chavanhimanshu4@gmail.com">chavanhimanshu4@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Keep Learning Everyday even if it is a small step don't stop keep going on.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/SmashedTrash">
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/himanshu-chavan-2a17a21a4/">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://www.instagram.com/_himanshu_chavan_/">
       <AiFillInstagram size="3rem"/>
     </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

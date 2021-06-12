import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello Everyone <br />
        Myself Himanshu Chavan
      </SectionTitle>
      <SectionText>
        Hello there, myself Himanshu Chavan I am a Web Developer from Mumbai, I mostly prefer working on front-end development, but I also have knowledge of back-end technologies, I like to work on new projects, I also love designing and currently learning Figma for UI designing.  
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/10zH6Ou9nT0M7tKiBCdRR7bCWXVVWU7k-/view?usp=sharing'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Successfully Completed Projects and Working on More'},
  { number: 2, text: 'Certificates From Progate', },
  { number: 1, text: 'Completed Web-Development Internship',}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achivements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
       Combining technology and creative problem-solving to positively impact others.
      </SectionText>
      {/* <Button onClick={() => window.location = '#'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
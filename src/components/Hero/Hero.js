import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a recent Informatics Engineering graduate from the University of Lampung with a 3.82 GPA. I'm passionate about learning, and during my studies, I took on leadership roles, including being a laboratory assistant for a year. I also completed a 6-month internship as a Flutter Developer and bottcamp Kotlin for 6-months. Currently i'm active learning Javascript such as React JS, Express JS, and MERN Stack
        </SectionText>
        <Button onClick={() => window.location = "https://github.com/mirfan23"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
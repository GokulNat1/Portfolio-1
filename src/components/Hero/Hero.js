import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! Welcome to my portfolio.
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        I am an always learning engineer with a passion in software engineering and I'm looking forward for what's next! I have a curious mind and enjoy tackling technical and scientific tasks. In addition to my strong analytical process, I am also a strong collaborator and have developed excellent teamwork skills. Check out my work and my journey. Looking forward to connecting!
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
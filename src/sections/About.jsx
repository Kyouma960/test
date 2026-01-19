import styled from 'styled-components';
import { personalData } from '../data';

const Section = styled.section`
  padding: 96px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 0 96px 0;
  }
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-size: 1rem;
  
  p {
    margin-bottom: 24px;
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.heading};
    font-weight: 500;
  }
`;

function About() {
  return (
    <Section id="about" aria-label="About me">
      <Content>
        {personalData.bio.long
          .split(/\n\s*\n/)
          .filter(paragraph => paragraph.trim() !== '')
          .map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))
        }
      </Content>
    </Section>
  );
}

export default About;

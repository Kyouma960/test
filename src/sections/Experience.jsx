import styled from 'styled-components';
import { experienceData } from '../data';
import { ArrowUpRight } from 'lucide-react';

const Section = styled.section`
  padding: 96px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
  
  h2 {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.text.heading};
    margin: 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  transition: all 0.3s;
  cursor: pointer;
  padding: 24px;
  margin: -24px;
  border-radius: 8px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 3fr;
  }
  
  &:hover {
    background-color: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(8px);
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
    
    h3 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const DateRange = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 0.25rem;
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleCompany = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.heading};
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
  line-height: ${({ theme }) => theme.lineHeights.normal};
  margin: 0;
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s;
  }
  
  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(94, 234, 212, 0.1);
  padding: 4px 12px;
  border-radius: 9999px;
`;

function Experience() {
  return (
    <Section id="experience" aria-label="Work experience">
      <SectionHeader>
        <h2>Experience</h2>
      </SectionHeader>
      <List>
        {experienceData.map((exp) => (
          <Card key={exp.id}>
            <DateRange>{exp.dateRange}</DateRange>
            <Content>
              <TitleCompany>
                {exp.title}
                {exp.company && ` · ${exp.company}`}
                <ArrowUpRight />
              </TitleCompany>
              <Description>{exp.description}</Description>
              <Tags>
                {exp.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </Tags>
            </Content>
          </Card>
        ))}
      </List>
    </Section>
  );
}

export default Experience;

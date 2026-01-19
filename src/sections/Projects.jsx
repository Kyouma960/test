import styled from 'styled-components';
import { projectsData } from '../data';
import { ArrowUpRight, Github } from 'lucide-react';

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
    grid-template-columns: ${({ $hasImage }) => $hasImage ? '1fr 3fr' : '1fr'};
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

const ImageContainer = styled.div`
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border: 2px solid rgba(148, 163, 184, 0.1);
    transition: border-color 0.2s;
  }
  
  ${Card}:hover & img {
    border-color: rgba(148, 163, 184, 0.3);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.heading};
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
  
  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s;
  }
  
  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
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

function Projects() {
  return (
    <Section id="projects" aria-label="Selected projects">
      <SectionHeader>
        <h2>Projects</h2>
      </SectionHeader>
      <List>
        {projectsData.map((project) => (
          <Card
            key={project.id}
            onClick={() => window.open(project.live || project.github, '_blank')}
            $hasImage={!!project.image}
          >
            {project.image && (
              <ImageContainer>
                <img src={project.image} alt={project.title} />
              </ImageContainer>
            )}
            <Content>
              <Title>
                {project.title}
                <ArrowUpRight />
              </Title>
              <Description>{project.description}</Description>
              <Tags>
                {project.technologies.map((tech) => (
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

export default Projects;

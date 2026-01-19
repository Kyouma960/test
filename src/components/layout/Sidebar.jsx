import styled from 'styled-components';
import { personalData, contactData, getVisibleSocialLinks } from '../../data';
import { Github, Linkedin, Twitter, Mail, Instagram, Camera, MessageCircle } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
  padding-bottom: 24px; /* Ensure some breathing room at the bottom */
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 8px;
  letter-spacing: -0.025em;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 320px;
  line-height: 1.5;
`;

const Nav = styled.nav`
  margin-top: 80px; /* Increased margin to push nav lower */
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.text.heading : theme.colors.text.primary};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s;

  span:first-child {
    width: ${({ $isActive }) => $isActive ? '64px' : '32px'};
    height: 1px;
    background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.text.heading : theme.colors.text.primary};
    transition: all 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.heading};
    
    span:first-child {
      width: 64px;
      background-color: ${({ theme }) => theme.colors.text.heading};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;
  
  @media (min-width: 1024px) {
    margin-top: 0;
    padding-bottom: 8px;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s;
  opacity: 0.7; /* Muted by default like inspiration */
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.heading};
    opacity: 1;
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px; /* Slightly smaller, more elegant icons */
    height: 20px;
  }
`;

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const IconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Instagram,
  vsco: Camera,
  whatsapp: MessageCircle
};

function Sidebar({ activeSection }) {
  const visibleSocials = getVisibleSocialLinks();

  return (
    <Container>
      <Top>
        <Name>{personalData.name}</Name>
        <Title>{personalData.tagline}</Title>
        <Subtitle>{personalData.bio.short}</Subtitle>

        <Nav>
          <NavList>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  href={link.href}
                  $isActive={activeSection === link.name.toLowerCase()}
                >
                  <span />
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </NavList>
        </Nav>
      </Top>

      <SocialLinks>
        {visibleSocials.map((social) => {
          const Icon = IconMap[social.icon] || Github;
          return (
            <SocialIcon
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              <Icon />
            </SocialIcon>
          );
        })}
        {contactData.email.display && (
          <SocialIcon
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email.address}&su=${encodeURIComponent(contactData.email.subject)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail />
          </SocialIcon>
        )}
      </SocialLinks>
    </Container>
  );
}

export default Sidebar;

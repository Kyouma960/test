import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import sections
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

// Import layout components
// Import layout components
import Sidebar from './components/layout/Sidebar';
import MobileMenu from './components/layout/MobileMenu';

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 48px;
    padding: 0 96px;
  }
`;

const SpotlightOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    700px circle at var(--mouse-x) var(--mouse-y),
    rgba(29, 78, 216, 0.20),
    transparent 80%
  );
`;

const LeftColumn = styled.header`
  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 45%;
    padding: 96px 0;
  }
  
  padding: 48px 0 0;
`;

const RightColumn = styled.main`
  flex: 1;
  padding: 48px 0;
  
  @media (min-width: 1024px) {
    padding: 96px 0;
    width: 52%;
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Spotlight effect logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Force background color to black
  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    document.documentElement.style.backgroundColor = '#000';

    // Also try to force it on the root element if it was somehow changed
    const root = document.getElementById('root');
    if (root) {
      root.style.backgroundColor = '#000';
    }
  }, []);

  // Simple Scroll Spy
  useEffect(() => {
    const sections = ['about', 'experience', 'projects'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Add offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SpotlightOverlay />
      <AppContainer>
        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          activeSection={activeSection}
        />

        {/* Left Column - Fixed Header/Nav */}
        <LeftColumn>
          <Sidebar activeSection={activeSection} />
        </LeftColumn>

        {/* Right Column - Scrollable Content */}
        <RightColumn>
          <About />
          <Experience />
          <Projects />


          <footer style={{ height: '200px' }} />
        </RightColumn>
      </AppContainer>
    </>
  );
}

export default App;
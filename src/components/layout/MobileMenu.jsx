import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: ${({ theme }) => theme.zIndices.toast};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background.overlay};
  border-radius: ${({ theme }) => theme.radii.base};
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.overlay};
  backdrop-filter: blur(5px);
  z-index: ${({ theme }) => theme.zIndices.overlay};
`;

const MenuContainer = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  width: min(75vw, 400px);
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndices.modal};
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  counter-reset: nav-counter;
`;

const NavItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const NavLink = styled.a`
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &::before {
    content: '0' + counter(nav-counter) '.';
    counter-increment: nav-counter;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];

function MobileMenu({ isOpen, onClose, activeSection }) {
    return (
        <>
            <MenuButton onClick={onClose} aria-label="Toggle Menu">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </MenuButton>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                        />
                        <MenuContainer
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <NavList>
                                {navLinks.map((link) => (
                                    <NavItem key={link.name}>
                                        <NavLink
                                            href={link.href}
                                            $isActive={activeSection === link.name.toLowerCase()}
                                            onClick={onClose}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </NavItem>
                                ))}
                            </NavList>
                        </MenuContainer>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default MobileMenu;

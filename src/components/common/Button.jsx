import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled button with theme colors and hover effects
const StyledButton = styled(motion.a)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.sm};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.base};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  /* Hover effect */
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
  }
  
  /* Active/click effect */
  &:active {
    transform: translateY(0);
  }
  
  /* Variant: Primary (filled button) */
  ${({ $variant }) =>
        $variant === 'primary' &&
        `
    background-color: rgba(100, 255, 218, 0.1);
    
    &:hover {
      background-color: rgba(100, 255, 218, 0.2);
    }
  `}
  
  /* Variant: Secondary (outlined - default) */
  ${({ $variant }) =>
        $variant === 'secondary' &&
        `
    border-color: #8892b0;
    color: #8892b0;
    
    &:hover {
      border-color: #64ffda;
      color: #64ffda;
    }
  `}
  
  /* Responsive sizing */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

/**
 * Reusable Button Component
 * 
 * @param {string} href - Link destination
 * @param {string} children - Button text
 * @param {string} variant - 'primary' or 'secondary' (default)
 * @param {object} rest - Additional props passed to the button
 */
function Button({ href = '#', children, variant = 'secondary', ...rest }) {
    return (
        <StyledButton
            href={href}
            $variant={variant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
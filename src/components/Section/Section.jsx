import { StyledSectionTitle } from './Section.styled';
import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

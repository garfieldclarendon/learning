import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import { styledComponent } from '../utils/styledComponent';

const StyledSection = styledComponent('section', {
  '& .compareToBox': {
    '& b': {
      display: 'block',
    },
    '& h1': {
      fontSize: '16px',
    },
    '& li': {
      marginBottom: '10px',
    },
    background: '#DACAB8',
    fontSize: '14px',
    padding: '20px',
  },
  '& .content': {
    background: '#F9F9F9',
    borderRadius: '4px',
    boxShadow: '0px 7px 23px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    fontSize: '18px',
    justifyContent: 'space-between',
    padding: '10px',
    position: 'relative',
  },
  '& .contentWrapper': {
    display: 'block',
    padding: '10px',
  },
  '& h1': {
    breakAfter: 'always',
  },
  margin: '20px auto',
  width: '1000px',
});

const StyledAside = styledComponent('aside', {
  '& b': {
    display: 'block',
  },
  '& h1': {
    fontSize: '16px',
  },
  '& li': {
    marginBottom: '10px',
  },
  background: '#F4E7D8',
  color: '#3F301D',
  fontSize: '14px',
  height: '362px',
  maxWidth: '400px',
  padding: '20px',
  width: '50%',
});

const StyledNav = styledComponent('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px auto',
  width: '1000px',
});

const TriColumn = ({
  asideContent,
  centerContent,
  children,
  prevLink,
  nextLink,
  title,
}) => (
  <React.Fragment>
    <StyledSection>
      <h1>{title}</h1>
      <div className="content">
        <div className="contentWrapper">
          {children}
        </div>
        {centerContent}
        <StyledAside>
          {asideContent}
        </StyledAside>
      </div>
    </StyledSection>
    <StyledNav>
      {prevLink && (
        <Link to={prevLink}>
          <Button text="Previous" />
        </Link>
      )}
      {nextLink && (
        <Link to={nextLink}>
          <Button text="Next" />
        </Link>
      )}
    </StyledNav>
  </React.Fragment>
);

TriColumn.propTypes = {
  asideContent: PropTypes.node.isRequired,
  centerContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  nextLink: PropTypes.string,
  prevLink: PropTypes.string,
  title: PropTypes.string.isRequired,
};

TriColumn.defaultProps = {
  nextLink: null,
  prevLink: null,
};

export default TriColumn;

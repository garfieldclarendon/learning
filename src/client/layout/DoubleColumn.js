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
    padding: '20px',
  },
  '& .contentWrapper': {
    '& p:first-of-type': {
      marginTop: 0,
    },
    display: 'block',
    padding: '10px',
    paddingTop: 0,
  },
  '& p': {
    display: 'block',
  },
  '& h1': {
    breakAfter: 'always',
  },
  margin: '50px auto',
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
  '& h1, & h2, & h3': {
    color: '#3F301D',
  },
  background: '#F4E7D8',
  color: '#3F301D',
  fontSize: '14px',
  padding: '20px',
  width: '50%',
});

const StyledNav = styledComponent('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '50px auto',
  width: '1000px',
});

const DoubleColumn = ({
  asideContent,
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

DoubleColumn.propTypes = {
  asideContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  prevLink: PropTypes.string,
  nextLink: PropTypes.string,
  title: PropTypes.string
};

export default DoubleColumn;

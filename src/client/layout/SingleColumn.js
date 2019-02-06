import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../atoms/Button'
import { styledComponent } from '../utils/styledComponent';

const StyledNav = styledComponent('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px auto',
  width: '1000px',
});

const StyledSection = styledComponent('div', {
  '& h1': {
    marginTop: 0,
  },
  '& .content': {
    background: '#F9F9F9',
    borderRadius: '4px',
    boxShadow: '0px 7px 23px rgba(0, 0, 0, 0.4)',
    fontSize: '18px',
    minHeight: '350px',
    padding: '20px',
  },
  margin: '20px auto',
  width: '1000px',
});

const SingleColumn = ({
  children,
  nextLink,
  prevLink,
  title,
}) => (
  <React.Fragment>
    <StyledSection>
      <h1>{title}</h1>
      <div className="content">
        {children}
      </div>
    </StyledSection>
    <StyledNav>
      {prevLink && (
        <Link to={prevLink}>
          <Button text="Previous" />
        </Link>
      )}
      {/* In order to get the next button to display in the right spot we need a blank element  */}
      {!prevLink && <div />}
      {nextLink && (
        <Link to={nextLink}>
          <Button text="Next" />
        </Link>
      )}
    </StyledNav>
  </React.Fragment>
);

SingleColumn.propTypes = {
  children: PropTypes.node.isRequired,
  nextLink: PropTypes.string,
  prevLink: PropTypes.string,
  title: PropTypes.string.isRequired,
}

SingleColumn.defaultProps = {
  nextLink: null,
  prevLink: null,
}

export default SingleColumn

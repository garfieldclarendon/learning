import React from 'react'
import DoubleColumn from '../layout/DoubleColumn'
import Icon from '../../assets/img'

const OurLesson = () => {
  return (
  <div>
    <DoubleColumn
      asideContent={
      (
        <div>
         <Icon name="peopleCollage" />
        </div>
      )
    }
      prevLink="intro"
      nextLink="crossingsaftey"
      title="Georgetown Department of Public Works"
    >
      <p>Congratulations! You've been placed on the City of Georgetown's Department of Transportation.</p>
      <p><Icon name="georgetown" height="200" width="200" /><Icon name="gcmrr" height="180" width="180" /></p>
      <p>The Garfield Central Railroad and the City want to make the crossing at Spring Street safer. You'll get to help!</p>
    </DoubleColumn>
  </div>
)};

export default OurLesson;

import React from 'react'
import DoubleColumn from '../layout/DoubleColumn'
import Icon from '../../assets/img'
import railroadCrossing from '../../assets/img/railroadCrossing.png'
import { styledComponent } from '../utils/styledComponent'

const ImageWrapper = styledComponent('div', {
  position: 'relative',
});

const CrossingSaftey = () => {
  return (
  <div>
    <DoubleColumn
      asideContent={
      (
        <div>
        </div>
      )
    }
      prevLink="intro"
      nextLink="sentencesofprograming"
      title="Railroad Crossing Saftey"
    >
      <p>Let's look at a typical railroad crossing. Click the image below to identify all the saftey systems in place.</p>
      <ImageWrapper>
        <img width="600" src={railroadCrossing} alt="railroad crossing"/>
      </ImageWrapper>
    </DoubleColumn>
  </div>
)};

export default CrossingSaftey;

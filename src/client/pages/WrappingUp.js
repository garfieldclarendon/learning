import React from 'react'
import { Link } from 'react-router-dom'
import SingleColumn from '../layout/SingleColumn'
import Button from '../atoms/Button'
import Icon from '../../assets/img'
import { styledComponent } from '../utils/styledComponent'

const ImageWrapper = styledComponent('div', {
  float: 'right',
  marginRight: 120
});

const WrappingUp = () => (
  <SingleColumn
    prevLink="coding5"
    title="Welcome"
  >
    <h1>Thanks!</h1>
    <ImageWrapper>
      <Icon name="clock1" />
    </ImageWrapper>
    <p>We hope you enjoyed the lesson. Please wait to be told what to do next.</p>
    <small><a href="https://www.vecteezy.com/">Graphics by: www.vecteezy.com</a></small>
  </SingleColumn>
);

export default WrappingUp;

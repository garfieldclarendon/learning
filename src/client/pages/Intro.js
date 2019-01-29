import React from 'react'
import { Link } from 'react-router-dom'
import SingleColumn from '../layout/SingleColumn'
import Button from '../atoms/Button'
import Icon from '../../assets/img'
import { styledComponent } from '../utils/styledComponent'

const ImageWrapper = styledComponent('div', {
  float: 'right',
  marginRight: 150
});

const Intro = () => (
  <SingleColumn
    nextLink="ourlesson"
    title="Welcome"
  >
    <h1>Welcome</h1>
    <ImageWrapper>
      <Icon name="clock1" />
    </ImageWrapper>
    <p>While we setting up, please wait. Once told, click continue.</p>
    <small><a href="https://www.vecteezy.com/">Graphics by: www.vecteezy.com</a></small>
  </SingleColumn>
);

export default Intro;

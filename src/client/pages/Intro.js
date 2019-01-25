import React from 'react'
import { Link } from 'react-router-dom'
import SingleColumn from '../layout/SingleColumn'
import Button from '../atoms/Button'

const Intro = () => (
  <div>
    <SingleColumn title="Welcome">
      <h1>Welcome</h1>
      <p>Please wait to click continue.</p>
      <Link to="syntax">
        <Button text="Continue" />
      </Link>
    </SingleColumn>
  </div>
);

export default Intro;

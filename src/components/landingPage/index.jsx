import React from 'react'
import RightBox from './rightBox'
import LeftBox  from './leftBox';

const LandingPage = () => {
  return (
    <>
      <div className="page-content__box">
        <RightBox />
        <LeftBox />
      </div>
    </>
  )
}

export default LandingPage
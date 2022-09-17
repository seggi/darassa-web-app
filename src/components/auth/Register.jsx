import React from 'react';
import RegisterInputForm from '../common/RegisterInputForm';
import "./style.css"

const Register = () => {
  return (
    <div className='content-box'>
      <div className="page-content__box">
          <RegisterInputForm pageTitle={"Registration"} />
       </div>
    </div>
  )
}

export default Register;

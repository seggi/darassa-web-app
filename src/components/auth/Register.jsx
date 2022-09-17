import React from 'react'
import { APP_NAME } from '../../constants/appLabel/appLabel'
import "./style.css"

const Register = () => {
  return (
    <div className='content-box'>
      <div className="content-box___column">
        <div className="content-page__title">
          <h1 className="page-title">
              {APP_NAME}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Register

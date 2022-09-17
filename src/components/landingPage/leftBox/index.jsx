import React from 'react'
import { APP_NAME } from '../../../constants/appLabel/appLabel'
import LoginPage from '../../auth/Login'
import './style.css';


const LeftBox = () => {
  return (
    <>
        <div className="left-box__contents">
            <div className="content-box__column">
                <div className="content-box__top-item">
                    <h2 className="appTitle">
                        {APP_NAME}
                    </h2>
                </div>
                <LoginPage />
            </div>
        </div>
    </>
  )
}

export default LeftBox
import React from 'react'
import { Link } from 'react-router-dom';

import "./style.css";

const AuthBox = ({pageTitle}) => {
  return (
    <>
        <div className="auth-items__box">
            <div className="top-items">
                <h2 className='box-title'>{pageTitle}</h2>
            </div>
            <div className="bottom-items">
                <form action="">
                    <div className="input-items">
                       <input type="email" placeholder='Enter your email' />
                       <input type="password" placeholder="***********" />
                       <Link to="/register" className='forget-pwd'>
                            <span>Don’t have an account ?</span>
                        </Link>
                       <input type="submit" value="Sign In" />
                     </div>
                </form>
                <Link to="/register" className='goto'>
                    <span>Don’t have an account ?</span>
                    <i> click  here to sign up</i></Link>
            </div>
        </div>
    </>
  )
}

export default AuthBox
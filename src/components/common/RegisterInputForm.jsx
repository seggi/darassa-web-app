import React from 'react'
import {Link } from 'react-router-dom';
import "./style.css";

const RegisterInputForm = ({pageTitle}) => {
  return (
    <>
         <div className='authentication-box'>
            <div className="auth-items__box">
                <div className="top-items">
                    <h2 className='box-title'>{pageTitle}</h2>
                </div>
                <div className="bottom-items">
                    <form action="">
                        <div className="input-items">
                        <input type="text" placeholder="School denomination"/>
                        <input type="email" placeholder='Enter your email' />
                        <input type="text" placeholder='Phone number'/>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder="***********" />
                        <input type="text" placeholder="Repeat password"/>
                        <input type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <Link to="/login" className='goto'>
                        <span>Already have an account ?</span>
                        <i> click  here to login</i></Link>
                </div>
            </div>
         </div>
    </>
  )
}

export default RegisterInputForm
import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginPage from '../../components/auth/Login'
import { changeUsersAge } from '../../redux/actions/changeUsersAge';


const LoginContainer = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [age, setAge] = useState(user.age);

  return (
    <div >
      <h1>Age: {user.age}</h1>
      <hr></hr>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeUsersAge(age))
      }}>
        <input onChange={(e) => setAge(e.target.value)}
        placeholder="Change age"/>
        <input type="submit" value="Submit"/>
      </form> 
    </div>
  )
}

export default LoginContainer
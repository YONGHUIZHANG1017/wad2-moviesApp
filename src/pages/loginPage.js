import React, {useState} from 'react';
import {message, Input, Button} from 'antd';
import './loginPage.css';
import {login, newSession, getAccountDetails} from '../api/tmdb-api'
import { connect } from 'react-redux';
import {saveUser} from '../reducers/user'


const LoginPage = ({history,saveUser})=> {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const doLogin = () => {
    if (!username || !password) {
      message.warn("username or password cannot be empty.")
      saveUser({a:1})
      return
    }
    login(username, password).then((res) => {
      if (res.success) {
        newSession(res.request_token).then(sessionId => {
          getAccountDetails(sessionId).then(user => {
            saveUser(user)
            history.replace('/')
          })
        })
      } else {
        message.error(res.status_message)
      }
    })
  }
  return (
    <div className={'login-container'}>
      <div className={'login-card'}>
        <Input className={'input'} placeholder="Username"
               onChange={event => setUserName(event.target.value)}/>
        <Input.Password className={'input'} placeholder="Password"
                        onChange={event => setPassword(event.target.value)}/>
        <Button onClick={doLogin} type={"primary"}>LOGIN</Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (user) => dispatch({...saveUser,user}),
});
export default connect( null, mapDispatchToProps )(LoginPage)

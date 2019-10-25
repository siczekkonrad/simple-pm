import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const Login = (props) => {

    const [ userRegistered, setUserRegistered ] = useState('');
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('')
    const setUserName = e => {
        setUser(e.target.value);
    };
    const setUserRegisteredName = e => {
        setUserRegistered(e.target.value);
    };
    const setUserPassword = e => {
        setPassword(e.target.value);
    }
    const loggedUser = props.loggedUser;

    return  (
        <>
            {loggedUser !== '' ? (
                <Redirect to='/Home' />
                ) : (
                    <div className='signContainer'>
                        <div className='loginArea container'>
                            <h1 className='loginArea__heading'>Sign up</h1>
                            <div className='loginForm'>
                                <input className='loginForm__input' placeholder='username' value={user} onChange={setUserName}/>
                                <input className='loginForm__input' placeholder='password' value={password} onChange={setUserPassword}/>
                                <button onClick={() => {
                                    if(user !== '') {
                                        props.register({user: user, password: password, loggedIn:false})
                                    }
                                }}>Login</button>
                            </div>
                        </div>

                        <div className='loginArea container'>
                            <h3>Alredy registered? Sign in</h3>
                            <h1 className='loginArea__heading'>Sign in</h1>
                            <div className='loginForm'>
                                <input className='loginForm__input' placeholder='username' value={userRegistered} onChange={setUserRegisteredName}/>
                                <button onClick={() => {
                                    if(userRegistered !== '') {
                                        props.login(userRegistered)
                                    }
                                }}>Login</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}


const mapStateToProps = state => {
    return {
        users: state.users,
        loggedUser: state.loggedUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userRegistered) => dispatch({type: 'LOGIN', payload: userRegistered}),
        register: (user) => dispatch({type: 'REGISTER_USER', payload: user})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
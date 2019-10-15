import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const Login = (props) => {

    const [user, setUser] = useState('');
    const setUserName = e => {
        setUser(e.target.value);
    };
    const isLogged = props.isLogged;

    return  (
        <>
            {isLogged && user.length > 0 && user !== '' ? (
                <Redirect to='/Home' />
                ) : (
                    <div className='loginArea container'>
                        <h1 className='loginArea__heading'>Login {props.user}</h1>
                        <div className='loginForm'>
                            <input className='loginForm__input' placeholder='username' value={user} onChange={setUserName}/>
                            <button onClick={() => {
                                if(user !== '') {
                                    props.login(user)
                                }
                            }}>Login</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}


const mapStateToProps = state => {
    return {
        user: state.user,
        isLogged: state.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch({type: 'LOGIN', payload: user})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
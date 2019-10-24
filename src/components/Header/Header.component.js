import React from 'react';
import { connect } from 'react-redux';
import Menu from "../Menu/Menu.component";

const Header = (props) => {
    const loggedUser = props.loggedUser;

    return (
        <header className='header'>
            {loggedUser !== '' ?
                <>
                <Menu/>
                    <div className='userBar'>
                         <div className='userName'>
                            { loggedUser }
                        </div>
                        <button className='logoutButton' onClick={() => props.logout(loggedUser)}>Logout</button>
                    </div>
                </>: null
            }
        </header>
     )
}

const mapStateToProps = state => {
    return {
        users : state.users,
        loggedUser: state.loggedUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: (loggedUser) => dispatch({type: 'LOGOUT', payload: loggedUser})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
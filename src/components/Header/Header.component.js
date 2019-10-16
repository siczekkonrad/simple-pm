import React from 'react';
import { connect } from 'react-redux';
import Menu from "../Menu/Menu.component";

const Header = (props) => {
    const isLogged = props.isLogged;
    const user = props.user;

    return (
        <header className='header'>
            {isLogged && user.length > 0 && user !== '' ?
                <>
                <Menu/>
                    <div className='userBar'>
                         <div className='userName'>
                            {user}
                        </div>
                        <button className='logoutButton' onClick={() => props.logout()}>Logout</button>
                    </div>
                </>: null
            }
        </header>
     )
}

const mapStateToProps = state => {
    return {
        user : state.user,
        isLogged: state.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({type: 'LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
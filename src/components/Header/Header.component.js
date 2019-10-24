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
                        <button className='logoutButton' onClick={() => props.logout()}>Logout</button>
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
        logout: () => dispatch({type: 'LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
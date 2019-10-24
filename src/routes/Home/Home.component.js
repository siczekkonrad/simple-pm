import React, { Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {

    const loggedUser = props.loggedUser;

    if( loggedUser === '' ){
        return (
            <Redirect to='/' />
        )
    }

    return (
        <div className='homeContainer container'>
            <Fragment>
                <h1> Home </h1>
            </Fragment>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        loggedUser: state.loggedUser
    }
}


export default connect(mapStateToProps)(Home);
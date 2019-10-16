import React, { Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {

    const isLogged = props.isLogged;

    if( isLogged === false ){
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
        user: state.user,
        isLogged: state.isLogged
    }
}


export default connect(mapStateToProps)(Home);
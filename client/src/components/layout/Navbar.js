import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <ul>
            <li>
                <i className="fas fa-sign-out-alt"></i>{' '}
                <a onClick={logout} href="#!">
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li>
                <i></i>{' '}
                <Link to='/'>Home</Link>
            </li>
            <li>
                <i></i>{' '}
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <i></i>{' '}
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i class="fas fa-code"></i> DevConnector</Link>
            </h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);

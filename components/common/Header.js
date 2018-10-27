import React from 'react';
import LoginComponent from '../Login';
import auth0Client from '../../services/Auth';

import { withRouter } from 'next/router';
import ActiveLink from '../ActiveLink';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import Link from 'next/link'

import { Link } from '../../routes'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signOut() {
    auth0Client.signOut();
    this.props.dispatch(actions.authFail());

    this.props.router.replace('/');
  };

  render() {
    const { className, color, auth: {isLoadingAuthState, isAuth} } = this.props;

    return (
        <Navbar className={className} color={color} expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Filip Jerga</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ActiveLink activeClassName="active" route="/blogs">
                  <a className="nav-link"> Blog </a>
                </ActiveLink>
              </NavItem>

              <NavItem>
                <ActiveLink activeClassName="active" route="/bio">
                  <a className="nav-link"> Bio </a>
                </ActiveLink>
              </NavItem>
              <NavItem>
                <ActiveLink activeClassName="active" route="/portfolio">
                  <a className="nav-link"> Portfolio </a>
                </ActiveLink>
              </NavItem>
              <NavItem>
                <ActiveLink activeClassName="active" route="/cv">
                  <a className="nav-link"> CV </a>
                </ActiveLink>
              </NavItem>
              {
                !isLoadingAuthState && !isAuth &&
                <NavItem>
                  <LoginComponent
                    actionEl={({toggle}) => <NavLink onClick={toggle} href="#"> Login </NavLink>} />
                </NavItem>
              }
              {
                !isLoadingAuthState && isAuth &&
                <NavItem>
                  <NavLink href="#" className="btn btn-danger" onClick={() => {this.signOut()}}>Sign Out</NavLink>
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(withRouter(Header));


// <NavLink className="mr-2 text-white">{auth0Client.getProfile().name}</NavLink>

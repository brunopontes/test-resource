import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';
import {
  DropdownItem, DropdownMenu, DropdownToggle, Nav,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo from './../../assets/logo.svg'

class DefaultHeader extends Component {

  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo,
            width: 130,
            height: 40,
            alt: 'logo',
          }}
          minimized={{
            src: logo, width: 30, height: 30, alt: 'Logo',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <span> <i className="fa fa-user" /></span>
              <span> Test</span>
              <span> <i className="fa fa-angle-down" /></span>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem >
                <i className="fa fa-arrow-left" />
                Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
  },
  dispatch,
);

const mapStateToProps = state => ({
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DefaultHeader),
);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  AppBreadcrumb, AppFooter, AppHeader, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer, AppSidebarNav,
} from '@coreui/react';
import navigation from '../../routes/nav';
import routes from '../../routes/routes';
import DefaultFooter from './defaultFooter';
import DefaultHeader from './defaultHeader';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => (route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )}
                  />
                )
                  : (null)))}
              </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import NavigationLink from './NavigationLink';

class NavigationBar extends Component {
  render = () => {
    return (
      <div className='flex-container justify-around navigation-bar'>
        <NavigationLink link='/' relative={true}>Etusivu</NavigationLink>
        <NavigationLink link='/seura' relative={true}>Seura</NavigationLink>
        <NavigationLink link='https://nimenhuuto.com/users/sessions/new' relative={false}>Nimenhuuto</NavigationLink>
        <NavigationLink link='https://fi.surveymonkey.com/r/XZVW9CK' relative={false}>Liittyminen</NavigationLink>
      </div>
    )
  }
}

export default withRouter(connect(() => ({}), {})(NavigationBar));
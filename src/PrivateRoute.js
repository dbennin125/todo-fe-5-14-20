import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ render: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    //will probably need to change to auth/login at somepoint, will test once front end written. 
    <Route
      {...rest}
      render={props => (rest.token ? <Component {...props} {...rest} /> : <Redirect to="/login" />)}
    />
  )
}

export default PrivateRoute
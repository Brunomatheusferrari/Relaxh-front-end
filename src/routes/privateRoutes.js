import React from "react";
import { Route, Redirect } from "react-router-dom";
import authServices from "../services/authServices";


export async function PrivateRoute({ children, permissions, ...rest }) {  
	const accessToken = authServices.getAccessToken();
	
	const user = await authServices.getUser(accessToken.sub)
	
	let userRole;

	if (accessToken) {
		userRole = user.role			
	}	

	return (
		<Route
		  {...rest}
		  render={({ location }) =>
			permissions.includes(userRole) ? (
				React.Children.map(children, child => {
					return React.cloneElement(child, { userRole });
				})
			) : (
			  <Redirect
				to={{
				  pathname: "/",
				  state: { from: location }
				}}
			  />
			)
		  }
		/>
	  );
}
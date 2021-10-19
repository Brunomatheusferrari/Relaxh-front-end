import React from "react";
import { Route, Redirect } from "react-router-dom";
import authServices from "../services/authServices";


export async function PrivateRoute({ children, permissions, ...rest }) {  
	let userRole;

	try {
		const user = (await authServices.getUser()).data

		userRole = user.role
	} catch (error) {
		console.log(error)
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
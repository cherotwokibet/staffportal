import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

// const RestrictedRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useContext(UserContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         currentUser ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// };

export default function PrivateRoute({ children }) {
  const { currentUser } = useContext(UserContext);
  return currentUser ? children : <Navigate to="/login" />;
}

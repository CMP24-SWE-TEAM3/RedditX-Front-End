import { Navigate } from "react-router-dom";
import { useAuth } from "./Authentication";

/**
 * Used to protect routes that need user to login
 *
 * @param {React.Component} children Who need user to login
 * @returns {React.Component}
 */
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.isLoggedIn() || new Date(auth.getExpirationDate()) < new Date()) {
    if (auth.getExpirationDate() < new Date()) {
      console.log("Token expired");
      auth.logout();
    }
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default RequireAuth;

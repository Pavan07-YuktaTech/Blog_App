import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../common";

// handle the private routes
const PublicRoute = () => {
  return getToken() ?<Outlet />  : <Navigate to="/" />;
};

export default PublicRoute;

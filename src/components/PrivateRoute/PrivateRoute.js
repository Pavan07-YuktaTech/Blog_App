import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getToken } from "../../common";

// handle the private routes
const PrivateRoutes = () => {
  const isAuthenticated = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoutes;



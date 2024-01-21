import { Navigate, Outlet } from "react-router-dom";
import CommonBlock from "../commonBlock/CommonBlock";

export const ProtectedRoute = ({ redirectPath = "/login", isAllowed  }) => {

    if (!isAllowed()) {
      return <Navigate to={redirectPath} replace={Boolean} />;
    }

    return <CommonBlock><Outlet /></CommonBlock>
  };
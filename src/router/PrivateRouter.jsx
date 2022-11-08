import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

const PrivateRouter = () => {
  const { currentUser } = useLogin();
  return <div>{currentUser ? <Outlet /> : <Navigate to="/login" />} </div>;
};

export default PrivateRouter;

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const userLoggedIn = useSelector((state) => state.authedUser);
    const location = useLocation();

    const redirectUrl = location.pathname;

    return userLoggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}  />
}
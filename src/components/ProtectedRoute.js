import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const userLoggedIn = useSelector((state) => state.authedUser);

    return userLoggedIn ? children : <Navigate to="/login" replace />
}
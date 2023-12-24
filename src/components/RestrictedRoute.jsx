import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggeIn } = useAuth();

    return isLoggeIn ? <Navigate to={redirectTo} /> : Component;
}
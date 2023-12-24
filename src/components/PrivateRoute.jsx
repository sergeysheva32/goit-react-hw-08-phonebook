import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggeIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggeIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

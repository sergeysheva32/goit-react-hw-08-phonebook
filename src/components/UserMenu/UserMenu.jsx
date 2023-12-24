import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

import css from './UserMenu.module.css';
import { logOut } from "../../redux/auth/operations";
import Button from 'react-bootstrap/Button';


export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());

  
return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button variant="outline-secondary" type="button" onClick={handleLogout}>Logout</Button>
      </div>
  );
};
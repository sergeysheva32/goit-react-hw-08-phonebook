import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggeIn = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggeIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
        
    </nav>
  );
};

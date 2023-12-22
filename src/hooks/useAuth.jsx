import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggeIn,
    selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
    return {
        isLoggeIn: useSelector(selectIsLoggeIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    };
};
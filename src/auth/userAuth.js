// useAuth.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../store/actions/authActions';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = user !== null;

  useEffect(() => {
    if (!user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, user]);

  const authRedirect = () => {
    if (error || !isLoggedIn) {
      console.error('Profile error:', error);
      return <Navigate to="/login" />;
    }
  };

  return { user, isLoggedIn, authRedirect };
};

export default useAuth;

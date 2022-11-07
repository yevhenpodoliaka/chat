import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLoggedIn,
  getIsFetchingCurrentUser,
} from '../redux/auth/authSelector';
import { fetchCurrentUser } from '../redux/auth/authOptions';

const HomePage = lazy(() => import('pages/HomePage'));
const NotFound = lazy(() => import('pages/NotFound'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

const AppRoutes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={null}>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <HomePage />
              ) : (
                <Navigate to="/sign-in" replace={true} />
              )
            }
          />
          <Route
            path="/sign-up"
            element={
              isLoggedIn ? <Navigate to="/" replace={true} /> : <RegisterPage />
            }
          />
          <Route
            path="/sign-in"
            element={
              isLoggedIn ? <Navigate to="/" replace={true} /> : <LoginPage />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default AppRoutes;

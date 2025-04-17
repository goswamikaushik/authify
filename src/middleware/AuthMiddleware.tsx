import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router';
import { path } from '../constants/constants';
import { localStorageAction } from '../utils/localStoreAction';

const AuthMiddleware: FC<PropsWithChildren> = ({ children }) => {
  const currentPath = useLocation().pathname;
  const { get } = localStorageAction();

  const token = get('access_token');
  const isAuthenticated = Boolean(token);
  const isAuthRoute = [path.SIGNIN, path.SIGNUP].includes(currentPath);

  if (isAuthRoute && isAuthenticated) return <Navigate to={path.HOME} replace />;
  if (currentPath === path.HOME && !isAuthenticated) return <Navigate to={path.SIGNIN} replace />;

  return children;
};

export default AuthMiddleware;

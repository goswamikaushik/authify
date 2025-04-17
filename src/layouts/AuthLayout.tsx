import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import AuthMiddleware from '../middleware/AuthMiddleware';

const AuthLayout: FC<PropsWithChildren> = () => {
  return (
    <AuthMiddleware>
      <Outlet />
    </AuthMiddleware>
  );
};

export default AuthLayout;

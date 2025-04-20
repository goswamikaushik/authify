import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import AuthMiddleware from '../middleware/AuthMiddleware';

const AuthLayout: FC<PropsWithChildren> = () => {
  return (
    <AuthMiddleware>
      <div className="flex h-screen flex-col items-center justify-center">
        <Outlet />
      </div>
    </AuthMiddleware>
  );
};

export default AuthLayout;

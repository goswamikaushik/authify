import { Route, Routes } from 'react-router';
import { path } from '../constants/constants';
import { SignInPage, HomePage, SignUpPage } from '../pages';
import { AppLayout, AuthLayout } from '../layouts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={path.SIGNIN} element={<AuthLayout />}>
        <Route index element={<SignInPage />} />
      </Route>
      <Route path={path.SIGNUP} element={<AuthLayout />}>
        <Route index element={<SignUpPage />} />
      </Route>

      <Route path="*" element={<p>kho gaye aap kaha</p>} />
    </Routes>
  );
};

export default AppRoutes;

import { SignIn } from '../components';

const SignInPage = () => {
  return (
    <div className="rounded-lg border-3 border-gray-200 p-5">
      <h1 className="text-3xl font-bold">Welcome to Authyfy</h1>
      <SignIn />
    </div>
  );
};

export default SignInPage;

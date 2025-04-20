import { Form } from 'react-router';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email:" />
      <Input type="password" placeholder="Password:" />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default SignIn;

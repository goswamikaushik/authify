import { useState } from 'react';

export default function SignUp() {
  const [visible, setVisible] = useState({
    password: false,
    confirmPassword: false
  });

  const toggleVisibility = (field: 'password' | 'confirmPassword') => {
    setVisible((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type={visible.password ? 'text' : 'password'} placeholder="********" />
            <button type="button" onClick={() => toggleVisibility('password')}>
              {visible.password ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div>
          <label>Confirm Password</label>
          <div>
            <input type={visible.confirmPassword ? 'text' : 'password'} placeholder="********" />
            <button type="button" onClick={() => toggleVisibility('confirmPassword')}>
              {visible.confirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

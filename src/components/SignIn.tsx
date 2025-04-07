import { useState } from "react";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
            />
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;

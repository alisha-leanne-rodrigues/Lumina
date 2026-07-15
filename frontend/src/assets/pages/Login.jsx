import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your Lumina account
        </p>


        <form className="login-form">

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>


          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>


          <button type="submit">
            Login
          </button>

        </form>


        <p className="auth-link">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </p>


      </div>

    </div>
  );
};


export default Login;
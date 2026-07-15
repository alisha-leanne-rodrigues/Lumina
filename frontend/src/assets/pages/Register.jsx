import { Link } from "react-router-dom";
import "./Register.css";


const Register = () => {

  return (

    <div className="register-page">


      <div className="register-card">


        <h1>Create Account</h1>


        <p className="register-subtitle">
          Join Lumina AI
        </p>



        <form className="register-form">


          <div className="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
            />

          </div>



          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>



          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
            />

          </div>



          <button type="submit">
            Register
          </button>


        </form>




        <p className="auth-link">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>


      </div>


    </div>

  );
};


export default Register;
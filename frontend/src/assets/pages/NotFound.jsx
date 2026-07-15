import { Link } from "react-router-dom";
import "./NotFound.css";


const NotFound = () => {


  return (

    <div className="notfound-page">


      <h1>
        404
      </h1>


      <h2>
        Page Not Found
      </h2>


      <p>
        The page you are looking for does not exist.
      </p>



      <Link to="/dashboard">

        Go Back Home

      </Link>



    </div>

  );

};


export default NotFound;
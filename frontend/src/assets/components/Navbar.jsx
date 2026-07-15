import { FaBell, FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "./Navbar.css";


function Navbar() {

  return (

    <header className="navbar">


      <SearchBar />


      <div className="navbar-right">


        <FaBell className="icon" />


        <FaUserCircle className="profile" />


      </div>


    </header>

  );

}


export default Navbar;
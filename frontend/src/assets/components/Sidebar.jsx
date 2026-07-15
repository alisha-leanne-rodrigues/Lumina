import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaChartLine,
  FaRobot,
  FaWallet,
  FaStar,
  FaNewspaper,
  FaCog
} from "react-icons/fa";

import "./Sidebar.css";


function Sidebar() {


  const menuItems = [

    {
      name:"Dashboard",
      path:"/dashboard",
      icon:<FaHome />
    },

    {
      name:"Stocks",
      path:"/stocks",
      icon:<FaChartLine />
    },

    {
      name:"Predictions",
      path:"/predictions",
      icon:<FaRobot />
    },

    {
      name:"Portfolio",
      path:"/portfolio",
      icon:<FaWallet />
    },

    {
      name:"Watchlist",
      path:"/watchlist",
      icon:<FaStar />
    },

    {
      name:"News",
      path:"/news",
      icon:<FaNewspaper />
    },

    {
      name:"Settings",
      path:"/settings",
      icon:<FaCog />
    }

  ];



  return (

    <aside className="sidebar">


      <div className="logo">

        <h2>
          Lumina
        </h2>

        <span>
          AI Stock Intelligence
        </span>

      </div>



      <nav>


        {
          menuItems.map((item)=>(


            <NavLink

              key={item.name}

              to={item.path}

              className={({isActive}) =>
                isActive ? "active" : ""
              }

            >

              <span className="sidebar-icon">

                {item.icon}

              </span>


              <span>

                {item.name}

              </span>


            </NavLink>


          ))
        }


      </nav>


    </aside>

  );

}


export default Sidebar;
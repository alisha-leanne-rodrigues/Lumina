import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./DashboardLayout.css";


const DashboardLayout = () => {

  return (

    <div className="dashboard-layout">


      <Navbar />


      <div className="dashboard-body">


        <Sidebar />


        <main className="dashboard-content">

          <Outlet />

        </main>


      </div>


      <Footer />


    </div>

  );

};


export default DashboardLayout;
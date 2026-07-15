import ChartCard from "../components/ChartCard";
import StatCard from "../components/StatCard";
import "./StockDetails.css";


const StockDetails = () => {


  const stats = [

    {
      title:"Current Price",
      value:"$214.32",
      change:"+2.4%"
    },

    {
      title:"Market Cap",
      value:"$3.1T",
      change:"+1.2%"
    },

    {
      title:"52 Week High",
      value:"$237.49",
      change:""
    },

    {
      title:"52 Week Low",
      value:"$164.08",
      change:""
    }

  ];



  return (

    <div className="stock-details-page">


      <div className="stock-header">


        <h1>
          Apple Inc. (AAPL)
        </h1>


        <p>
          Technology Sector
        </p>


      </div>




      <div className="details-stats">


        {
          stats.map((item,index)=>(

            <StatCard
              key={index}
              {...item}
            />

          ))
        }


      </div>




      <div className="details-chart">


        <ChartCard />


      </div>




      <div className="stock-info">


        <h2>
          About Company
        </h2>


        <p>
          Apple Inc. designs, manufactures and sells technology products
          including smartphones, computers and digital services.
        </p>


      </div>


    </div>

  );

};


export default StockDetails;
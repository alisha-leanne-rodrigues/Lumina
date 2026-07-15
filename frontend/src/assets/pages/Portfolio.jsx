import StatCard from "../components/StatCard";
import StockCard from "../components/StockCard";
import "./Portfolio.css";


const Portfolio = () => {


  const portfolioStats = [
    {
      title:"Total Investment",
      value:"$18,500",
      change:"+12%"
    },
    {
      title:"Current Value",
      value:"$24,580",
      change:"+4.8%"
    },
    {
      title:"Total Profit",
      value:"$6,080",
      change:"+32%"
    }
  ];



  const investments = [
    {
      name:"Apple Inc.",
      symbol:"AAPL",
      price:"$214.32",
      change:"+2.4%"
    },
    {
      name:"Microsoft",
      symbol:"MSFT",
      price:"$505.20",
      change:"+1.9%"
    },
    {
      name:"NVIDIA",
      symbol:"NVDA",
      price:"$172.21",
      change:"+3.2%"
    }
  ];



  return (

    <div className="portfolio-page">


      <h1>
        My Portfolio
      </h1>


      <p className="portfolio-subtitle">
        Track your investments and performance
      </p>



      <div className="portfolio-stats">

        {
          portfolioStats.map((item,index)=>(
            <StatCard
              key={index}
              {...item}
            />
          ))
        }

      </div>



      <section className="portfolio-section">


        <h2>
          Your Holdings
        </h2>


        <div className="holdings-grid">


          {
            investments.map((stock,index)=>(

              <StockCard
                key={index}
                {...stock}
              />

            ))
          }


        </div>


      </section>


    </div>

  );

};


export default Portfolio;
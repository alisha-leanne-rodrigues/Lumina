import SearchBar from "../components/SearchBar";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import StockCard from "../components/StockCard";
import NewsCard from "../components/NewsCard";
import PredictionCard from "../components/PredictionCard";

import "./Dashboard.css";


const Dashboard = () => {


  const stats = [
    {
      title: "Portfolio Value",
      value: "$24,580",
      change: "+4.8%"
    },
    {
      title: "Daily Profit",
      value: "$540",
      change: "+2.3%"
    },
    {
      title: "Market Cap",
      value: "$3.2T",
      change: "+1.5%"
    },
    {
      title: "AI Accuracy",
      value: "92%",
      change: "Stable"
    }
  ];



  const stocks = [
    {
      name:"Apple Inc.",
      symbol:"AAPL",
      price:"$214.32",
      change:"+2.4%"
    },
    {
      name:"Tesla",
      symbol:"TSLA",
      price:"$286.45",
      change:"+1.8%"
    },
    {
      name:"NVIDIA",
      symbol:"NVDA",
      price:"$172.21",
      change:"+3.2%"
    }
  ];



  const news = [
    {
      title:"Tech stocks rise after strong earnings",
      source:"Market Watch",
      time:"2 hours ago"
    },
    {
      title:"AI companies attract new investments",
      source:"Bloomberg",
      time:"5 hours ago"
    }
  ];



  return (

    <div className="dashboard-page">


      <div className="dashboard-search">
        <SearchBar />
      </div>



      <div className="stats-grid">

        {
          stats.map((item,index)=>(
            <StatCard
              key={index}
              title={item.title}
              value={item.value}
              change={item.change}
            />
          ))
        }

      </div>




      <div className="dashboard-main">


        <div className="chart-section">

          <ChartCard />

        </div>



        <div className="prediction-section">

          <PredictionCard />

        </div>


      </div>





      <section className="dashboard-section">

        <h2>
          Trending Stocks
        </h2>


        <div className="stock-grid">

          {
            stocks.map((stock,index)=>(
              <StockCard
                key={index}
                {...stock}
              />
            ))
          }

        </div>

      </section>





      <section className="dashboard-section">


        <h2>
          Latest News
        </h2>



        <div className="news-grid">


          {
            news.map((item,index)=>(

              <NewsCard
                key={index}
                {...item}
              />

            ))
          }


        </div>


      </section>


    </div>

  );

};


export default Dashboard;
import SearchBar from "../components/SearchBar";
import StockCard from "../components/StockCard";
import "./Stocks.css";


const Stocks = () => {


  const stocks = [

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
      name:"Tesla",
      symbol:"TSLA",
      price:"$286.45",
      change:"-0.8%"
    },

    {
      name:"Amazon",
      symbol:"AMZN",
      price:"$226.10",
      change:"+1.4%"
    },

    {
      name:"Google",
      symbol:"GOOGL",
      price:"$192.50",
      change:"+2.1%"
    },

    {
      name:"NVIDIA",
      symbol:"NVDA",
      price:"$172.21",
      change:"+3.2%"
    }

  ];



  return (

    <div className="stocks-page">


      <h1>
        Stocks
      </h1>


      <p className="stocks-subtitle">
        Explore market stocks and their performance
      </p>



      <div className="stocks-search">

        <SearchBar />

      </div>




      <div className="stocks-grid">


        {
          stocks.map((stock,index)=>(

            <StockCard
              key={index}
              {...stock}
            />

          ))
        }


      </div>


    </div>

  );

};


export default Stocks;
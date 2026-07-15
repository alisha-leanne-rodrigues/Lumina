import StockCard from "../components/StockCard";
import "./Watchlist.css";


const Watchlist = () => {


  const watchlist = [

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
    },

    {
      name:"Microsoft",
      symbol:"MSFT",
      price:"$505.20",
      change:"+1.9%"
    }

  ];



  return (

    <div className="watchlist-page">


      <h1>
        Watchlist
      </h1>


      <p className="watchlist-subtitle">
        Keep track of your favourite stocks
      </p>




      <div className="watchlist-grid">


        {
          watchlist.map((stock,index)=>(

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


export default Watchlist;
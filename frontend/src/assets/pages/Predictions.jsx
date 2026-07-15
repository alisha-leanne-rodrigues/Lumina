import PredictionCard from "../components/PredictionCard";
import ChartCard from "../components/ChartCard";
import "./Predictions.css";


const Predictions = () => {


  const predictions = [

  {
    id:1,
    stock:"Apple Inc.",
    recommendation:"Buy",
    confidence:"92%"
  },

  {
    id:2,
    stock:"Tesla",
    recommendation:"Hold",
    confidence:"76%"
  },

  {
    id:3,
    stock:"NVIDIA",
    recommendation:"Buy",
    confidence:"95%"
  }

];



  return (

    <div className="predictions-page">


      <h1>
        AI Predictions
      </h1>


      <p className="prediction-subtitle">
        AI powered stock market insights
      </p>



      <div className="prediction-layout">


        <div className="prediction-chart">

          <ChartCard />

        </div>



        <div className="prediction-cards">


          {
            predictions.length > 0 ? (

              predictions.map((item)=>(

                <PredictionCard

                  key={item.id}

                  stock={item.stock || "Unknown Stock"}

                  recommendation={
                    item.recommendation || "Neutral"
                  }

                  confidence={
                    item.confidence || "0%"
                  }

                />

              ))

            ) : (

              <p>
                No predictions available
              </p>

            )

          }


        </div>


      </div>


    </div>

  );

};


export default Predictions;
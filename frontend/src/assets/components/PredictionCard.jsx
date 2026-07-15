import "./PredictionCard.css";


const PredictionCard = ({
  stock = "Unknown Stock",
  recommendation = "Hold",
  confidence = "0%"
}) => {


  const predictionClass =
    recommendation?.toLowerCase() || "hold";


  return (

    <div className="prediction-container">


      <div className="price-section">

        <p>
          Stock
        </p>

        <h2>
          {stock}
        </h2>

      </div>



      <div className={`recommendation ${predictionClass}`}>

        {recommendation}

      </div>




      <div className="confidence">


        <p>
          AI Confidence
        </p>



        <div className="progress">


          <div

            className="progress-bar"

            style={{
              width: confidence
            }}

          >

            {confidence}

          </div>


        </div>


      </div>



    </div>

  );

};


export default PredictionCard;
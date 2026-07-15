import NewsCard from "../components/NewsCard";
import "./News.css";


const News = () => {


  const newsList = [

    {
      title:"Global markets show positive movement",
      source:"Reuters",
      time:"1 hour ago"
    },

    {
      title:"Artificial intelligence stocks continue growth",
      source:"Bloomberg",
      time:"3 hours ago"
    },

    {
      title:"Investors focus on technology sector",
      source:"CNBC",
      time:"6 hours ago"
    }

  ];



  return (

    <div className="news-page">


      <h1>
        Market News
      </h1>


      <p className="news-description">
        Latest financial updates and market trends
      </p>



      <div className="all-news-grid">


        {
          newsList.map((news,index)=>(

            <NewsCard
              key={index}
              {...news}
            />

          ))
        }


      </div>



    </div>

  );

};


export default News;
import Card from "./Card";
import "./StatCard.css";

function StatCard({
  title,
  value,
  change,
  icon,
  positive = true
}) {

  return (
    <Card>

      <div className="stat-card">

        <div className="stat-header">

          <div>
            <p className="stat-title">
              {title}
            </p>

            <h2>
              {value}
            </h2>
          </div>


          <div className="stat-icon">
            {icon}
          </div>

        </div>


        <p 
          className={
            positive 
            ? "stat-change positive"
            : "stat-change negative"
          }
        >
          {positive ? "▲" : "▼"} {change}
        </p>


      </div>

    </Card>
  );
}

export default StatCard;
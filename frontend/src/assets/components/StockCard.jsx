import Card from "./Card";
import {
 FaStar
} from "react-icons/fa";

import "./StockCard.css";


function StockCard({

  company,
  symbol,
  price,
  change,
  positive = true,
  favorite = false

}) {


return (

<Card>


<div className="stock-card">


<div className="stock-top">


<div>

<h3>
{company}
</h3>

<span>
{symbol}
</span>

</div>


<button
className={
favorite 
? "favorite active"
: "favorite"
}
>

<FaStar/>

</button>


</div>



<div className="stock-price">

<h2>
${price}
</h2>


<p
className={
positive 
? "gain"
: "loss"
}
>

{positive ? "+" : "-"}
{change}%

</p>


</div>



<div className="stock-footer">

<span>
Market Open
</span>


<button>
View Details
</button>


</div>



</div>


</Card>

);

}


export default StockCard;
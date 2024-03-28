import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () =>{

    const { id } = useParams();
    const resInfo = useRestaurantMenu(id);

    if(resInfo === null){
        return <Shimmer />;
    }

    const {name, costForTwoMessage, cuisines, sla } = resInfo?.cards[2]?.card?.card.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    
    return(
        <div className="res-menu">
            <h1>{name}  </h1>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines}</h3>
            <h3>{sla.slaString}</h3>
            <ul>
                {itemCards.map((item) => (
                   <li key={item.card.info.id}>{item.card.info.name} - {" ₹"} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
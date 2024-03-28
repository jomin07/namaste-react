import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);

    const { id } = useParams();
    console.log(id);

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + id);

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo === null){
        return <Shimmer />;
    }

    const {name, costForTwoMessage, cuisines, sla } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
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
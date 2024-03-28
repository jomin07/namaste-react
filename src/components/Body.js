import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

  const [listOfRestaurants,setListOfRestaurants] = useState([]);

  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();

      console.log(json);
      console.log(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);

      setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> 
  :(
      <div className="body">
          <div className="filter">
              <div className="search">
                  <input type="text" value={searchText} onChange={(e) =>{
                      setSearchText(e.target.value);
                  }}/>
                  <button onClick={() =>{
                    console.log("Search Text:", searchText);

                    const filteredRests = listOfRestaurants.filter((res) => 
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredListOfRestaurants(filteredRests);
                  }}>Search</button>
              </div>

              <button onClick={() =>{
                const filteredList = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4
                );
                setListOfRestaurants(filteredList);
              }} className="filter-btn">Top Rated Restaurants</button>
          </div>

          <div className="res-container">
              {filteredListOfRestaurants.map((restaurant) =>(
                  <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}><RestaurantCard resData={restaurant}/></Link>
              ))}
          </div>
      </div>
  )
}

export default Body;
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

    return (
        <div className=" w-64 m-5 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <img 
                className=" rounded-lg" 
                src={
                CDN_URL +
                cloudinaryImageId
                } 
            />
            <h3 className=" text-base font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;
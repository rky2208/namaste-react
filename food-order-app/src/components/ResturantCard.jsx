const ResturantCard = ({cloudinaryImageId,restName,cuisines,rating,slaTime})=>{
    
    return (
        <div className="rest-card-item">
            <img 
            className="res-logo"
            alt="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <div className="rest-details">
            <h3>{restName}</h3>
            <span>{cuisines.join(", ")}</span>
            <span>{rating} Stars</span>
            <span>{slaTime}</span>
            </div>
        

        </div>
    )
}

export default ResturantCard;
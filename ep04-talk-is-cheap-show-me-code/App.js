
const apiData = [{
    id:1,
    cloudinaryImageId:"b14ce410905af6e9366e79f3386893c5",
    restName:"Donald's Pastry Shop",
    couines:[
        "Bakery",
      ],
      rating:4,
      slaTime:"12-20 mins"
},
{
    id:2,
    cloudinaryImageId:"ucpycovjdz3epr8iqkph",
    restName:"Angels in my Kitchen",
    couines:[
        "Bakery",
        "Desserts"
    ],
    rating:4.3,
    slaTime:"15-20 mins"
},
{
    id:3,
    cloudinaryImageId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39294.JPG",
    restName:"KFC",
    couines:[
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
    rating:4.3,
    slaTime:"25-30 mins"
},
{
    id:4,
    cloudinaryImageId:"kouu8jdtoca7lwe2vwwc",
    restName:"Hongs Kitchen Hearty! Tasty ! Chinese!",
    couines:[
        "Chinese",
        "Asian",
        "Tibetan"
      ],
    rating:4.4,
    slaTime:"10-50 mins"
},
{
    id:5,
    cloudinaryImageId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/5815c87d-4d96-4214-a2c1-9014cc85a038_21320.jpg",
    restName:"Barista Coffee",
    couines:[
        "Beverages",
        "Snacks",
        "Desserts"
      ],
    rating:3.5,
    slaTime:"25-30 mins"
}
]
const Header = ()=>{
    return <div className="header-container">
        <img 
        className="app-logo"
        alt='app-logo'
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>

        </div>
    </div>
}
const ResturantCard = ({cloudinaryImageId,restName,couines,rating,slaTime})=>{
    
    return (
        <div className="rest-card-item">
            <img 
            className="res-logo"
            alt="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <div className="rest-details">
            <h3>{restName}</h3>
            <span>{couines.join(", ")}</span>
            <span>{rating} Stars</span>
            <span>{slaTime}</span>
            </div>
        

        </div>
    )
}
const BodyLayout = ()=>{
    return <div className="body-container">
        <div className="search">
            <input type="search"/>
            <button>search</button>
        </div>
        <div className="resturant-list-container">
            {
                apiData?.map(resItem=>{
                    return <ResturantCard key={resItem.id} {...resItem}/>
                })
            }
           
        </div>
    </div>
}

const Footer = ()=>{
    return <div className="footer-container">
        © 2024 Bundl Technologies Pvt. Ltd
    </div>
}

const App = ()=>{
    return <div className="app-root-container">
    <Header/>
    <BodyLayout/>
    <Footer/>
    </div>
}
export default App;
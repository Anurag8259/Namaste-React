import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Header
//     - Logo
//     - Nav Items
// Body
//    - Search
//    - Restaurant Container
//          -Restaurant Card
// Footer
//    - Copyright
//    - Links
//    - Address
//    - Contact

const resData = [
        {
            "info": {
                "id": "117554",
                "name": "Madras Cafe",
                "cloudinaryImageId": "mkqhqwwkvstkr6hccdtr",
                                            "locality": "Police Bazar",
                                            "areaName": "Police Bazar",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "South Indian","Asian"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "612",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "4.9K+",
                                            "sla": {
                                                "deliveryTime": 35,
                                                "lastMileTravel": 1.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "1.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-07-02 21:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "Exclusively available on Swiggy — you won't find it elsewhere."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Exclusively available on Swiggy — you won't find it elsewhere.",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "2.5K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-dc064483-8472-4d2c-86f4-448b2a86d46f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/shillong/madras-cafe-police-bazar-rest117554",
                                            "type": "WEBLINK"
                                        }
        },{
                                        "info": {
                                            "id": "97692",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/b1b75879-bfcd-441d-9c1e-1776dc647f39_97692.JPG",
                                            "locality": "Quinton Road",
                                            "areaName": "Police Bazaar",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "547",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "14K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 1.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-07-02 21:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                        "description": "Top-rated for Bolt, based on user votes."
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        "description": "Top-rated for Burger, based on user votes."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for Bolt, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                                                    "theme": ""
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for Burger, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-f19d9966-ea1e-4163-943c-610d8d123023"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/shillong/kfc-quinton-road-police-bazaar-rest97692",
                                            "type": "WEBLINK"
                                        }
                                    }]
                                    

const Style = {
    backgroundColor : "#f8f7eb"
}
// props - ia an object which is used to pass data from parent to child component. It is immutable.
const RestaurantCard = (props) => {
    const {resList} = props; // Destructuring of props object
    const {name, cuisines} = resList.info; // Destructuring of resList object
    return (
        <div className = "res-card" style = {Style}>
            <img className = "res-logo"src = "https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5-500x500.jpg"/>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{resList.info.avgRating} stars</h2>
            <h2>{resList.info.sla.slaString}</h2>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className = "app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Body/>
            {/* Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
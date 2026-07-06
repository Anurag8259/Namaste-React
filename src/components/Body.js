import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import {useState} from "react";


const Body = () => {


    // Local State Variables
    let [filteredList , setFilteredList] = useState(resData);

    // let filteredList = [];
    return (
        <div className = "body">
            <div className = "filter">
                <button className = "filter-btn" onClick = {() => {

                    const filteredList2 = resData.filter((x) => x.info.avgRating > 4.0);
                    setFilteredList(filteredList2);

                    // filteredList = resData.filter((x) => x.info.avgRating > 4.0);
                    console.log(filteredList);
                } // Js function {}
                }>
                    Top rated Restaurants
                </button>
            </div>
            <div className = "search">Search</div>
            <div className = "res-container">
                {/* Restaurant Card - Separate component as multiple is reqd. */}
                {/* Passing props to a component */}
                {/* <RestaurantCard  resList = {resData[0]}/>
                <RestaurantCard  resList = {resData[1]}/> */}

                {/* <RestaurantCard resName="KFC" cuisine = "Fast Food" /> */}

                {
                    // Why is key required? - React uses key to identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
                    //Using keys : Huge optimization in React. React does not have to render the entire list again. It only renders the items which have changed.
                    filteredList.map((restaurant) => {
                        return <RestaurantCard resList = {restaurant} key = {restaurant.info.id}/>
                    })
                }


            </div>
        </div>
    )
}

export default Body;
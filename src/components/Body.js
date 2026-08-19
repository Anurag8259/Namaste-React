import RestaurantCard from "./RestaurantCard";
// import resData from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


const Body = () => {


    // Local State Variables
    let [filteredList , setFilteredList] = useState([]);
    const [allRestaurants , setAllRestaurants] = useState([]);
    const [searchText , setSearchText] = useState("");

    useEffect(()=>{
        // console.log("useEffect called");
        fetchData();
    }, [])

    const fetchData = async() => {
        // fetch() is given to us by the browser and can be used in JS.
        const data = await fetch("https://www.eatsure.com/v1/api/get_all_brands?&store_id=10157&city_id=5785");
        
        // fetch() returns a promise. This needs to be handled using .then() and .catch() methods OR Async/Await. We will use async/await here.
        const json = await data.json();

        console.log(json);

        // access the live data from json. ? - Optional chaining operator. It is used to access the value of a property located deep within a chain of objects without having to check that each reference in the chain is valid.
        setFilteredList(json?.data?.data);
        setAllRestaurants(json?.data?.data);
    }

    // This is printed before the useEffect console log.
    console.log("Body rendered"); 

    // Conditional Rendering
    if(filteredList.length === 0){
        // return <h1>Loading...</h1>
        return <Shimmer/>;
    }


    // let filteredList = [];
    return (
        <div className = "body">
            <div className = "filter">
                <div className = "search">
                    {/* As we type , the body component will re-render */}
                    <input type = "text" className = "search-box" value = {searchText} onChange = {(e)=>{setSearchText(e.target.value)}}></input>
                    <button className = "search-btn" onClick = {()=>{
                        console.log(searchText);
                        // To avoid bug of searching the filtered list instead of the original list, we will use the allRestaurants state variable to filter the original list.
                        const filteredRestaurants = allRestaurants.filter((res)=>res.brand_name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(filteredRestaurants);
                    }}>Search</button>

                </div>
                <button className = "filter-btn" onClick = {() => {

                    const filteredList2 = filteredList.filter((x) => x.store_id > 4.5);
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
                        return <Link to={`/restaurants/${restaurant.store_id}/${restaurant.brand_id}`} key = {restaurant.brand_id}><RestaurantCard resList = {restaurant} /></Link>
                    })
                }


            </div>
        </div>
    )
}

export default Body;
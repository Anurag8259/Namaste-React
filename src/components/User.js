import {useState , useEffect} from "react";


const User = (props) => {
    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(2);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Counting...")
        },1000);

        return ()=>{
            clearInterval(timer); // Called when this component is unmounted. This is used to clean up any resources that were created in useEffect. For example, if we have a timer or an event listener, we need to remove it when the component is unmounted.
        }
    });

    return (
        <div className = "user">
            <h1>Count : {count}</h1>
            <button className = "count_button"onClick = {()=> setCount(count + 1)}>
                Increase Count
            </button>
            <button className = "count_button" onClick = {()=> setCount(count - 1)}>
                Decrease Count
            </button>
            {/* <h1>Count2 : {count2}</h1> */}
            <h1>{props.name}</h1>
            <h2>1217387273   abc@gmail.com</h2>
        </div>
    )
}
export default User;
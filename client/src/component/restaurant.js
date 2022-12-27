import React from "react";


export default function Restaurant({restaurant}){
    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <h1>Name: {restaurant.name}</h1>
            <h1>Address: {restaurant.address}</h1>
            <h1>Opening Time: {restaurant.openingtime}</h1>
            <h1>Closing Time: {restaurant.closingtime}</h1>
            <a style={{color:'black', fontSize:'20px', backgroundColor:'teal', padding:'5px'}} href="/homescreen">Go to Restaurant Menu</a>
        </div>
            
    )
}
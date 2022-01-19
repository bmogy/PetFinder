import React from "react"
import "./header.css"
import logo from "../../Img/pets.jpeg"
const petFinderBanner = () => {
return (
    <div>
    <div className="headerContainer">
        <ul>
            <a href="#"><li>Dog Adoption</li></a>
            <a href="#"><li>Cat Adoption</li></a>
            <a href="#"><li>Other Pet Adoptions</li></a>
            <a href="#"><li>Shelter and Rescues</li></a>
        </ul>
    </div>
    <div className="imageBanner">
<img src={logo}></img>
   <div className="imageBannerInfo">
    <h1>Get Personalised Pet Matches</h1>
    <p>Answer a few quick questions to see your perfect matches on Petfinder</p>
    <button>Get Started</button> 
    </div>   
    </div>
   </div>
)
}
export default petFinderBanner
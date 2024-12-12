import React from "react";
import { useState, useEffect } from "react";

const App = () => {
const [images,setImages]=useState({img1:"",img2:""})

const fetchImage=async (imgType)=>{
let response=await fetch('https://randomuser.me/api/?gender=female')
// let response=await fetch('https://randomuser.me/api/')

let data=await response.json()
setImages((prev)=> ({...prev,[imgType]:data.results[0].picture.large}))
}

useEffect(()=>{
fetchImage("img1")
fetchImage("img2")

  document.addEventListener("keydown", handleKeyDown);
},[])
  // Handle key down event for left and right arrows
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
fetchImage("img1")
    } else if (e.key === "ArrowLeft") {
fetchImage("img2")
    }
  };

  return (
    <>
      <main>
        <header>facemash</header>
        <div className="banner"><h1>Who is hotter ? click to choose</h1></div>

        <div className="container">
          <div className="left" onClick={()=> fetchImage("img2")}>
            <img src={images.img1} alt="" />
          </div>
<h1 className="or">or</h1>
          <div className="right"  onClick={()=>  fetchImage("img2")}>
          <img src={images.img2} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

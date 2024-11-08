import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [name, setName] = useState("")

useEffect(()=>{
  setName(localStorage.getItem("name"))
  
},[])
  return (
    <div className="home-layout">
      <h1>{` Welcome ${name}`}</h1>
    </div>
  );
}

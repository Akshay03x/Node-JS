import { useState } from "react";
import { useEffect } from "react";

const Header=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3033/Faculty').then(res=>res.json().then(res=>setData(res)));
    },[])
    // return <h1>hello</h1> 
    const Faculty=data.map((e)=>{
        return <h1>{e.FacultyName}</h1>;
    })

    return Faculty;
}
export default Header;
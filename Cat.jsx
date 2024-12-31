import { useState } from "react";
function cat(){
    let [count, setCount]= useState(0);
}import { useState } from "react";
function Cat()
{
    let myname="vijay"
    let[count,setCount]=useState(0)
    let[name,setName]=useState(10)
    return(
        <div>
            <h1> count : {count}</h1>
            
            <button onClick={()=>setCount(count++)}>++</button>
            <button onClick={()=>setCount(count--)}>--</button>
            <h1>name:{name} </h1>
            <label htmlFor="name">name : </label>
            <input type="text"  onChange={(t)=>setName(t.target.value)} />
        </div>
    )
}
export default Cat;


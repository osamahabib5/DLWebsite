import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Increment() {
    const [count,setCount] = useState(0);
    const decreaseCount = () =>{
        if (count > 0){
            setCount(count-1);
        }
        else{
            setCount(count);
        }
    }
    return (
        <div className="d-flex flex-row">
        <div className="p-2"><button className="btn minus-btn disabled" type="button" onClick  = {decreaseCount}>-</button></div>
        <div className="p-2"><input type = "text" id = "quantity" value = {count}/></div>
        <div className="p-2"><button className = "btn minus-btn disabled" type = "button" onClick  = {() => setCount(count+1)}>+</button></div>
    </div>
    )
}

export default Increment

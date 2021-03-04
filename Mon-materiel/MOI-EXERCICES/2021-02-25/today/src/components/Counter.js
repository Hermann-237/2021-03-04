import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';




function Counter() {
    const [count, setCount] = useState(0)
    function add(){
        if(count>0) setCount(count-1)
        else setCount(0)
    }
    return (
        
        <>
            <h2>{count}</h2>
      
            <button className="btn btn-primary m-5" onClick= {()=> setCount(count + 1)}> Increment</button>
             <button className="btn btn-danger m-5" onClick= {()=> add()}> Decrement</button> 
             <button className="btn btn-danger m-5" onClick= {()=> setCount(0)}> reset</button> 
        </>
      
    );
  }
  
  
  export default Counter;
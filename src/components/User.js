import { useState } from "react";

const User = (props) =>{
    const [ count,setCount ] = useState(0);
    const {name, position} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h3>{position}</h3>
            <h3>Count: {count}</h3>
            <button onClick={() =>{
                setCount(count + 1);
            }}>Increase</button>
        </div>
    )
}

export default User;
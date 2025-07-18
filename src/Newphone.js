import { useContext } from "react";
import { formcontext } from "./contexts/formcontext" 

export default function Newphone(){
    let mycontext = useContext(formcontext);
    console.log("formco0ntext:",mycontext);
    return(
        <div>
            <label for='phone'>phone number</label><br/>
                <input type="text" id="phone" value={mycontext.value} 
                onChange={(e)=>{mycontext.setvalue({...mycontext.currentvalue,phonenum:e.target.value})}}
                /><br/>
        </div>
    )

}
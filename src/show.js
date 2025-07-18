import { useContext } from "react";
import { showcontext } from "./contexts/profile";

export default function Show(){
    let showdata  = useContext(showcontext);


    return(
        <div>
            <div>name = {showdata.name}</div><br/>
            <div>age = {showdata.age}</div><br/>
            <div>title = {showdata.title}</div><br/>
        </div>
        

    );
}
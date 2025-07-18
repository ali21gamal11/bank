import { useState } from 'react';
import "./form.css";
import Message from "./Message";
import Newphone from "./Newphone";
import Show from "./show.js";
import { formcontext } from "./contexts/formcontext";
import { showcontext } from "./contexts/profile";

export default function Form(){
    const [show ,setshow] = useState(false);
    const [form,setform] = useState({name:"",age:"",email:"",phonenum:"",emp:false});
    const [error,seterror] = useState(null)
    let btndisabled = form.name === "" || form.age === "" || form.email === "" || form.phonenum === "" ;

    function handleclick(event){
        event.preventDefault(event);
        setshow(true);

        seterror(null);
        if(form.age <18 || form.age>120){
            seterror("the age is not allowed");
        }else if(form.phonenum.length !== 11){
            seterror("phone number is inncorect")
        }


    }
    
    function handledivclick(){
        if(show === true){
        setshow(false)    
        }
        
    }
    
        
        
  
    return(
        <div className="per" onClick={handledivclick}>
            <showcontext.Provider value={{name:"ali",age:20,title:"ttt"}}>
                <Show/>
            </showcontext.Provider>
            <Message vi={show} error={error}/>
            <form>
                <label for='name'>name</label><br/>
                <input type="text" id="name" value={form.name} onChange={(e)=>{setform({...form,name:e.target.value})}}/><br/>
                <label for='email'>email</label><br/>
                <input type="text" id="email" value={form.email} onChange={(e)=>{setform({...form,email:e.target.value})}}/><br/>
                {/* <label for='phone'>phone number</label><br/>
                <input type="text" id="phone" value={form.phonenum} onChange={(e)=>{setform({...form,phonenum:e.target.value})}}/><br/> */}
                <formcontext.Provider value={{value:form.phonenum,currentvalue:form, setvalue:setform}}>
                <Newphone />
                </formcontext.Provider>
                <label for='age'>age</label><br/>
                <input type="number" id="age" value={form.age} onChange={(e)=>{setform({...form,age:e.target.value})}}/><br/>
                <label for='emp'>are you employe</label><br/>
                <input type="checkbox" id="emp" checked={form.emp} onChange={(e)=>{setform({...form,emp:e.target.checked})}}/><br/>
                <button disabled={btndisabled} className={btndisabled?"disabled":"active"} type="submit" onClick={handleclick}>submit</button>
            </form>
            
            
        </div>
    )
}
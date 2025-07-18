export default function Message({vi,error}){


    if(vi){
        return(
                        <div className="message" style={{color: error ? "red" : "green"}}>{error != null ? error : "the form has been submited"}</div>
        )
    }
}
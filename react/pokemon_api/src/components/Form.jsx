import React, {useState} from "react";
//import context

const Form = () => {
    const [favPoke, setFavPoke] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setFavPoke("");
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={(e)=>setFavPoke(e.target.value)} value={favPoke}/>
            {/* setfavPoke onChange */}
            <input type="submit" value={"Submit"}/>
        </form>
    )
}

export default Form
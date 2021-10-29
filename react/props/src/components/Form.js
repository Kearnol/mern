import React, {useState} from "react";

const Form = () => {

    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confpass, setConfpass] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstname, lastname, email, password
        };
        console.log(newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfpass("");
        }


    return(
        <div>
            <form onSubmit={ createUser } >
                <div>
                    <label for="firstname">First Name: </label>
                    <input id="firstname" type ="text" onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
                </div>
                <div>
                    <label for="lastname">Last Name: </label>
                    <input id="lastname" type ="text" onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input id="email" type ="text" onChange={(e)=>setEmail(e.target.value)} value={email}/> 
                </div>
                <div>
                    <label for="firstname">Password: </label>
                    <input id="firstname" type ="password" onChange={(e)=>setPassword(e.target.value)} value={password}/> 
                </div>
                <div>
                    <label for="confirm">Confirm Password: </label>
                    <input id="confirm" type ="password" onChange={(e)=>setConfpass(e.target.value)} value ={confpass}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            <h2>First Name: {firstname}</h2>
            <h2>Last Name: {lastname}</h2>
            <h2>Email: {email}</h2>
            <h2>Password: *******</h2>
        </div>
    )
}

export default Form;
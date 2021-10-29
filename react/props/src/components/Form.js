import React, {useState} from "react";

const Form = () => {

    const [firstname,setFirstname] = useState("");
    const [fnameerror, setFnameerror] = useState("");
    const [lastname,setLastname] = useState("");
    const [lnameerror, setLnameerror] = useState("");
    const [email,setEmail] = useState("");
    const [emailerror,setEmailerror] = useState("");
    const [password,setPassword] = useState("");
    const [passerror,setPasserror] = useState("");
    const [confpass, setConfpass] = useState("");
    const [conferror, setConferror] = useState("");
    const [submiterror, setSubmiterror] = useState("");
    const [hasbeensubmitted, setHasbeensubmitted] = useState(false);

    const createUser = (e) => {
        const newUser = {
            firstname, lastname, email, password
        };
        console.log(newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfpass("");
        setHasbeensubmitted(true)
    }


    const handleFname = (e) => {
        e.preventDefault();
        setFirstname(e.target.value)
        if(e.target.value.length == 0){
            setFnameerror("")
        }
        else if(e.target.value.length < 2){
            setFnameerror("Name must be at least 2 characters long");
        }
        else{
            setFnameerror("")
        }
    }
    
    const handleLname = (e) => {
        e.preventDefault();
        setLastname(e.target.value)
        if(e.target.value.length == 0){
            setLnameerror("")
        }
        else if(e.target.value.length < 2){
            setLnameerror("Name must be at least 2 characters long");
        }
        else{
            setLnameerror("")
        }
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
        if(e.target.value.length == 0){
            setEmailerror("")
        }
        else if(e.target.value.length < 5){
            setEmailerror("Email must be at least 5 characters long");
        }
        else{
            setEmailerror("")
        }
    }

    const handlePasswords = (e) =>{
        e.preventDefault();
        setPassword(e.target.value);
        if(e.target.value.length == 0){
            setPasserror("");
        }
        else if (e.target.value.length < 8){
            setPasserror("Password must be 8 characters");
        }
        else{
            setPasserror("");
        }
    }

    const confirmPass = (e) => {
        e.preventDefault();
        setConfpass(e.target.value);
        if(e.target.value.length == 0){
            setConferror("");
        }
        else if(e.target.value != password){
            setConferror("Passwords don't match");
        }
        else{
            setConferror("");
        }
    }


    return (<div>
            {
            hasbeensubmitted?
            <h1>Thanks for Submitting!</h1>:
            <div>
                <form onSubmit={ createUser }>
                    <div>
                        <label for="firstname">First Name: </label>
                        <input id="firstname" type ="text" onChange={ handleFname } value={firstname}/>
                        {
                            fnameerror?
                            <p style = {{color:'red'}}> {fnameerror}</p>:null
                        }
                    </div>
                    <div>
                        <label for="lastname">Last Name: </label>
                        <input id="lastname" type ="text" onChange={ handleLname } value={lastname}/>
                    </div>
                        {
                            lnameerror?
                            <p style = {{color:'red'}}> {lnameerror}</p>:null
                        }
                    <div>
                        <label for="email">Email: </label>
                        <input id="email" type ="text" onChange={ handleEmail } value={email}/> 
                        {
                            emailerror?
                            <p style = {{color:'red'}}> {emailerror}</p>:null
                        }
                    </div>
                    <div>
                        <label for="firstname">Password: </label>
                        <input id="firstname" type ="password" onChange={ handlePasswords } value={password}/>
                        {
                            passerror?
                            <p style = {{color:'red'}}> {passerror}</p>:null 
                        }
                    </div>
                    <div>
                        <label for="confirm">Confirm Password: </label>
                        <input id="confirm" type ="password" onChange={ confirmPass } value ={confpass}/>
                        {
                            conferror?
                            <p style = {{color:'red'}}> {conferror}</p>:null 
                        }
                    </div>
                    <input type="submit" value="Submit"/>
                    {
                        submiterror?
                        <p style = {{color:'red'}}> {submiterror}</p>:null
                    }
                </form>
                <h2>First Name: {firstname}</h2>
                <h2>Last Name: {lastname}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: *******</h2>
            </div>
            }
        </div>
    )
}

export default Form
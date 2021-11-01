import React, {useState} from "react";

const Form = (props) => {
    
    const [myForm, setMyForm] = useState({
        alias: "",
        realName: "",
        yearsActive: 0,
        leaning: "Hero",
        isAlive: true
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.onSubmitChar(myForm);
    }


    //this combines the handlers for most other inputs PLUS checkboxes:
    const onChangeHandler = e => {
        if(e.target.type == "checkbox"){
            setMyForm({...myForm, [e.target.name]: e.target.checked})
        }
        else{
            setMyForm({...myForm, [e.target.name]: e.target.value})
        }
    }

    // We can also write a seperate handler for checkboxes: 
    // const onCheckedHandler = e => {
    //     setMyForm({...myForm, [e.target.name]: e.target.check})
    // }
    
    return(
        <div>
            <h1>This is my form</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Alias</label><br/>
                <input type="text" name="alias" value={myForm.alias} onChange={onChangeHandler}/><br/>
                <label>Real Name</label><br/>
                <input type="text" name="realName" value={myForm.realName} onChange={onChangeHandler}/><br/>
                <label>Years Active</label><br/>
                <input type="number" name="yearsActive" value={myForm.yearsActive} onChange={onChangeHandler}/><br/>
                <label htmlFor="">Leaning</label><br/>
                <select name="leaning" id="leaning" onChange={onChangeHandler}>
                    <option value="Hero">Hero</option>
                    <option value="Villian">Villian</option>
                    <option value="Other">Other</option>
                </select><br/>
                <label htmlFor="">Is Alive</label><br/>
                <input type="checkbox" name="isAlive" checked={myForm.isAlive} onChange={onChangeHandler}/><br/>
                <input type="submit" value="+ Add"/> <br/> <br/> <br/>
                
            </form>
        </div>
    )
}

export default Form;
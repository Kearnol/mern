import React, {useState} from "react";

const Box_gen = (props) => {
    const [boxcolor, setBoxColor] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        props.color_box(boxcolor)
            
    }

    return(
        <form onSubmit = { submitForm }>
            <label for="color">Box Color</label><br/>
            <input type="text" name="color" id="color" onChange={(e) => setBoxColor(e.target.value)}/><br/>
            <input type="submit" value="submit"></input>
        </form>
    )

}

export default Box_gen

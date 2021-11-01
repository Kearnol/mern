import React, {useState} from "react";

const Box_gen = (props) => {
    const [boxcolor, setBoxColor] = useState("");
    // const [boxgen]

    const submitForm = (e) => {
        e.preventDefault();
        props.color_box(boxcolor);
        setBoxColor("");   
    }

    return(
        <form onSubmit = { submitForm }>
            <label for="color">Box Color</label><br/>
            <input type="text" name="color" id="color" onChange={(e) => setBoxColor(e.target.value)} value={boxcolor}/><br/>
            <input type="submit" value="submit"></input>
        </form>
    )

}

export default Box_gen

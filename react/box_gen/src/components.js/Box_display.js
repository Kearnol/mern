import React, {useState} from "react";
import styles from "./Boxes.module.css"

const Box_display = (props) =>{
    
    // const print_box = (arr) => {
    //     arr.map((color) => {<div background={`${color}`} className="box"></div>} )
    // }
    
    const style = {
        backgroundColor: props.colors,
    }

    return(
        <div className={styles.flex}>
            {
                props.colors.map((color) =>{
                console.log(color);
                return <div style={{backgroundColor:color}} className={styles.box}></div>;
            })
            }
        </div>
    )
}
export default Box_display

import React, {useState} from "react";
import styles from "./Boxes.module.css"

const Tabs = (props) => { 
    
    const [output, setOutPut] = useState("Placeholder")
    console.log(props)

    const change_output = (index) => {
        setOutPut(props.tabs[index].content);
    }
    
    
    return(
        <div className={styles.container}>
            <div className={styles.flex}>
                {props.tabs.map((tab, index) => {
                        return(
                            <>
                            <div className={styles.tab} onClick={() => change_output(index)}>{tab.label}</div>
                            </>
                            )
                    })
                }
            </div>
            <div className={styles.tab_display}>{output}</div>
        </div>
    )
}

export default Tabs;
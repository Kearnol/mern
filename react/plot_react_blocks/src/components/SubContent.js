import React, {Component} from 'react'
import styles from "./Plotstyle.module.css"

class SubContent extends Component{
    render(){
        return(
                <div className={styles.subflex}>
                    <div className={styles.subCont}></div>
                    <div className={styles.subCont}></div>
                    <div className={styles.subCont}></div>
                </div>
        )
    }
}

export default SubContent
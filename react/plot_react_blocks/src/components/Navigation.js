import React, {Component} from 'react'
import styles from './Plotstyle.module.css'
import StyledBox from './StyledBox'

class Navigation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.navigation}>
                <button onClick={this.popup}>Button</button>
            </div>
        )
    }
    popup = () => {
        const box = document.getElementsByClassName(styles.navigation)
        box.innerHTML = <StyledBox bgColor = "blue"/>
    }

}

export default Navigation
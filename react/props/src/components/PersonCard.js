import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return(
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.birthday}>Birthday 🎂</button>
            </div>
        )
    }

    birthday = () => {
        const {age} = this.state;
        this.setState({age: age+1});
    }


}

export default PersonCard
import React, {useState} from "react";

const Results = (props) => {
// const {alias, realName, yearsActive} = props.character;
// ^ = destructuring of the props variable. 
    const isAliveStyle = {
        textDecoration:"none"
    }
    const isDeadStyle = {
        textDecoration: "line-through",
    }

    const checkIsAlive= e => {
        props.updateIsAlive(e.target.value)
    }

    return (
        <table>
            <tr>
                <th>Alias:</th>
                <th>Real Name:</th>
                <th>Years Active:</th>
                <th>Leaning:</th>
                <th>Is Alive:</th>
            </tr>
            
            {props.allCharacters.map((character, i) => {
                return<tr style={character.isAlive? isAliveStyle: isDeadStyle}>
                    <td>{character.alias}</td>
                    <td>{character.realName}</td>
                    <td>{character.leaning}</td>
                    <td>{character.yearsActive}</td>
                    <td>{character.isAlive? "Yes":"No"}<input type="checkbox" name="isAlive" checked={character.isAlive} onChange={checkIsAlive} value={i}/></td>
                </tr>
            })}
        </table>



    )
}

export default Results
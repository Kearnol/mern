import React, {useState} from "react";
import styles from "./Components.module.css"

const List = (props) => {
    const [todo, setTodo] = useState({
        item: "",
        complete: false
    })
    const [allTodos, setAllTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllTodos([...allTodos, todo]);
        console.log(allTodos);
        setTodo({item:"", complete:false});
    }

    const removeTask = (index) => {
        console.log(index);
        setAllTodos([...allTodos.slice(0, index), ...allTodos.slice(index+1)])
        console.log(allTodos);
    }

    function change_status(index){
        console.log(index);
        const status_to_update = allTodos[index];
        status_to_update.complete = !status_to_update.complete;
        console.log(allTodos);
        setAllTodos([...allTodos])
    }


    return(
        <>
        <h1>To-do List: </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="add_item" value={todo.item} onChange={e=>setTodo({item: e.target.value, complete:false})}/>
            <input className ={styles.submit} type="submit" value="Submit"/>
        </form>
        <table>
            <tr>
                <th>To-Do</th>
                <th>Complete?</th>
                <th>Remove</th>
            </tr>

        {allTodos.map((todo, index) => {
            return(
                <tr>
                    <td>{ todo.item }</td>
                    <td> <input type="checkbox" checked={ todo.complete } onChange={() => change_status(index) }/> </td>
                    <td> <button className={ styles.delete } onClick={()=>removeTask(index)}>Delete</button> </td>
                </tr>
            )
        })}
        </table>
        </>
    )
}

export default List;
import React, {useState, useEffect} from "react";
import styles from "./Components.module.css"

const List = (props) => {
    const [todo, setTodo] = useState({
        item: "",
        complete: false
    })

    // function splitter(arr){
    //     const splitArr = arr.split(",");
    //     return splitArr
    // }
    const [allTodos, setAllTodos] = useState(joiner())
    const [saveList, setSaveList] = useState(true)
    
    function joiner(){
        if (localStorage.getItem("save") == "false"){return []}
        else if (localStorage.getItem("allitems")){
            let arrayItems = localStorage.getItem("allitems").split(",");
            let arrayCompletes = localStorage.getItem("allCompletes").split(",");
            arrayCompletes = arrayCompletes.map((bol)=> bol ==="true");
            var results = []
            arrayItems.forEach((itemAdd, i)=> { results.push({item: itemAdd, complete:arrayCompletes[i]})})
            console.log("results", results)
            return results
        }else{
            return [];
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllTodos([...allTodos, todo]);
        console.log(allTodos);
        setTodo({item: null, complete:false});
    }

    const removeTask = (index) => {
        setAllTodos([...allTodos.slice(0, index), ...allTodos.slice(index+1)])

    }

    function change_status(index){
        const status_to_update = allTodos[index];
        status_to_update.complete = !status_to_update.complete;
        setAllTodos([...allTodos])
    }

    useEffect(() => {
        let allItems = "";
        let allCompletes = "";
            for(let todo of allTodos){
                allItems += todo.item + ",";
                allCompletes += todo.complete + ",";
            }
        allItems = allItems.slice(0, allItems.length-1);
        allCompletes = allCompletes.slice(0, allCompletes.length-1);
        localStorage.setItem("allitems", allItems);
        localStorage.setItem("allCompletes", allCompletes);
        localStorage.setItem("save", saveList)   
    }, [allTodos, saveList]);

    const save = () => {
        setSaveList(!saveList)
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
        <label>Save this to-do list?</label>
        <input type="checkbox" name="save" checked={saveList} onChange={save}/>
        </>
    )
}

export default List;
import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function List() {
  const [value, setValue] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (event)=>{
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(value === ""){
      return;
    }

    setTodos((prev)=>[...prev,value]);
    setValue("");
  }

  const deleteBtn = (index) => {
    setTodos(toDos.filter((item,todoIndex) => index !== todoIndex));
  }

  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="plz input your todo list"/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index) => 
          <li key={index}>{item} 
          <button onClick={()=>deleteBtn(index)}>❌</button></li>)}
      </ul>
    </div>
  );
}

export default List;

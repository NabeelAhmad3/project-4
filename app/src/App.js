import React, { useState ,useEffect} from "react";
import "./App.css";
import { AiTwotoneDelete } from "react-icons/ai";
// import { AiOutlineCheck } from "react-icons/ai";
function App() {
  // const [isCmpltScreen, setIsCmpltScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDes, setNewDes] = useState("");

  const handleAddtodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDes
    }
    let updateTodoArr = [...allTodos];
    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem('todo list',JSON.stringify(updateTodoArr))
  }
  useEffect(() => {
  let savedTodo=JSON.parse(localStorage.getItem('todo list'));
  
   if(savedTodo){
    setTodos(savedTodo);
   }
  }, [])
  
  const handleDlt=(index)=>{
let reduceTodo=[...allTodos];
reduceTodo.splice(index);
localStorage.setItem('todo list',JSON.stringify(reduceTodo));
setTodos(reduceTodo);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="todo-input">
          <div className="input-items">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Enter Title of your Todo" />
          </div>
          <div className="input-items">
            <label>Description</label>
            <input type="text" value={newDes} onChange={(e) => setNewDes(e.target.value)} placeholder="Enter Description of your Todo" />
          </div>
          <div className="input-items">
            <button type="button" onClick={handleAddtodo} className="primary-btn">
              Add
            </button>
          </div>
        </div>
        {/* <div className="btn-area">
          <button
            className={`secondry-btn ${isCmpltScreen === false && "active"}`}
            onClick={() => setIsCmpltScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondry-btn ${isCmpltScreen === true && "active"}`}
            onClick={() => setIsCmpltScreen(true)}
          >
            completed
          </button>
        </div> */}
        <div className="todo-list" >
          {allTodos.map((item, index) => {
            return (
            <div className="todo-list-items" key={index}>

              <div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              </div>

              <div>
              <AiTwotoneDelete className="icon" onClick={()=>handleDlt(index)} title="delete"/>
              {/* <AiOutlineCheck className="check-icon" title="complete"/> */}
              </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
export default App;

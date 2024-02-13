import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, removeTask } from "./task";

const Tkpracticeui = () => {
  // const myState = useSelector((state) => state);
  const myState = useSelector((state) => state.task);
  console.log(myState);
  const dispatch = useDispatch();

  // const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch(addTask({ task: "Task 1" }));
    dispatch(addTask({ task: "Task 2" }));
    dispatch(addTask({ task: "Task 3" }));
  };
  const handleRemove = () => {
    dispatch(removeTask({id:2}));
  };
  const handleComplete =() =>{
    dispatch(completeTask({id:1}))
  }
  return (
    <div>
      {/* <h1>{myState}</h1>
      <h1>{dispatch(addTask({ task: "Task 1" }))}</h1> */}
      {/* <button
        onClick={() => {
          dispatch({ task: "task1" });
        }}
      >
        Addtask
      </button> */}
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input> */}
      <button onClick={handleAdd}>Add task</button>
      <button  onClick={handleRemove}>Remove task</button>
      <button onClick={handleComplete}>Complete task</button>
   
    </div>
  );
};
// const Tkpracticeui = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector(state => state.task);
// const [input, setInput] = useState('');

// const handleAddTodo = () => {
//   if (input.trim() !== '') {
//     dispatch(addTask({ id: Math.random(), text: input }));
//     setInput('');
//   }
// };

// const handleRemoveTodo = id => {
//   dispatch(removeTask(id));
// };

// return (
//   <div>
//     <input value={input} onChange={e => setInput(e.target.value)} />
//     <button onClick={handleAddTodo}>Add Todo</button>
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           {todo.text}
//           <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// };

export default Tkpracticeui;

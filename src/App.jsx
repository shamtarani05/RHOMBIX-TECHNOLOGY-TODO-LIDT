import { useState } from 'react';
import './App.css';

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim()) { // Prevent adding empty todos
      settodos((todos) => [
        ...todos,
        { todo, isCompleted: false }
      ]);
      settodo(""); // Clear the input after adding
    }
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleDeleteFunction = (index) => {
    settodos((todos) => [
      ...todos.slice(0, index), // All items before the index
      ...todos.slice(index + 1), // All items after the index
    ]);
  };

  const handleEdit = (index) => {
    const updatedTodo = prompt("Enter the todo:", todos[index].todo); // Provide current value in prompt
    if (updatedTodo !== null) {
      settodos((todos) =>
        todos.map((item, idx) =>
          idx === index ? { ...item, todo: updatedTodo } : item
        )
      );
    }
  };

   const handleiscomplete=(index)=>{
    settodos((todos)=>
    todos.map((item , idx)=>{
      
     return  idx==index?{...item , isCompleted:!item.isCompleted}:item
    

    }))
   }

  return (
    <body>
      <div className="todoapp">
        <h1>TodoList</h1>
        <div className="addtodo">
          <input onChange={handleChange} type='text' value={todo} className='input' />
          <button className='Add' onClick={handleAdd}>Add</button>
        </div>
        {todos.length === 0 && <p className='p'>No todo here</p>}
        {todos.map((item, index) => (
          <div className='todolist' key={index}>
            <p style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.todo}</p>
            <button className='Edit' onClick={() => handleEdit(index)}>Edit</button>
            <button className='Delete' onClick={() => handleDeleteFunction(index)}>Delete</button>
            <button className='Completed' onClick={() => handleiscomplete(index)}>
              Mark as Completed
            </button>
          </div>
        ))}
      </div>
    
    </body>
  );
}

export default App;

import React from 'react';
import './App.css';
import TodoList from './Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
        <br></br>
        <TodoList />
      </header>
    </div>
  );
}

export default App;

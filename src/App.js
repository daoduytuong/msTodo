import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import Login from './Login';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
      {
        !isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <TodoList />
        )
      }
    </div>
  );
}

export default App;

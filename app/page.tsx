"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Complete the project documentation", completed: false },
    { id: 2, text: "Review pull requests", completed: true },
    { id: 3, text: "Schedule team meeting", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          My Todo List
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Add
            </button>
          </div>
          
          <div className="space-y-2">
            {todos.map(todo => (
              <div key={todo.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className={`flex-1 text-gray-800 dark:text-gray-200 ${todo.completed ? 'line-through opacity-60' : ''}`}>
                  {todo.text}
                </span>
                <button className="text-red-500 hover:text-red-700 transition-colors">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>{todos.length} todos • {completedCount} completed</p>
        </div>
      </div>
    </div>
  );
}
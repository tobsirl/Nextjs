import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import swr from 'swr';

export default function LastSales() {
  const [todos, setTodos] = useState();

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/');

  if (error) return <div>Failed to load...</div>;

  if (!data) return <div>Loading</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

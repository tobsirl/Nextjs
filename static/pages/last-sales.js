import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import swr from 'swr';

export default function LastSales({ dataServer }) {
  const [todos, setTodos] = useState(dataServer);
  console.log('dataServer :>> ', dataServer);
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/');

  if (error) return <div>Failed to load...</div>;

  if (!data && !todos) return <div>Loading</div>;

  console.log('data :>> ', data);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

  const dataServer = await response.json();

  return {
    props: { dataServer },
  };
}

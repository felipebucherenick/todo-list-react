import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';

/* const defaultTodos = [
  { text: 'Cortar el pasto', completed: true },
  { text: 'Pintar la reja', completed: false },
  { text: 'Picar cebolla', completed: true },
  { text: 'Bañar al perro', completed: false },
  { text: 'Comer nueces', completed: false },
];
 */

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;

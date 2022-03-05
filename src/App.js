
import React from 'react';
import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddToDo from './components/AddToDo';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {useState, useEffect} from 'react';

function App() {

  const initialTodos = [
    {
        id:1,
        body: 'get bread',
    },
    {
        id:2,
        body: 'get butter'
    },
];

const [todos, setTodos] = useState(
  ()=> JSON.parse(localStorage.getItem('todos')) || [] ); //callback function here triggers only on initial render and not when todos re-renders which makes application faster.


  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

function deleteToDos(id) {
  const newToDos = todos.filter(todo => {
    return id !== todo.id
  });
  setTodos(newToDos);
}

function addToDO(todo){
  setTodos([...todos, todo]);
}
 
  return (
   
      <VStack p={4}>
          <IconButton icon={ <FaSun/>} isRound='true' size='lg' alignSelf="flex-end"/>
          <Heading 
          mb="8" 
          fontWeight="extrabold" 
          size="2xl" 
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)" 
          bgClip="text" >Todo Application

          </Heading>

          <TodoList todos={ todos } deletetodo={ deleteToDos } />

          <AddToDo addToDo={addToDO} />

      </VStack>
    
  );
}

export default App;
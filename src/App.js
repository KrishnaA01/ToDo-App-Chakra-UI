
import React from 'react';
import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddToDo from './components/AddToDo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {useState, useEffect} from 'react';

function App() {

  const initialTodos = [
    {
        id:1,
        body: 'do laundry',
    },
    {
        id:2,
        body: 'send email reply'
    },
];

//grabbing whatever values are stored in local storage OR empty array value

const [todos, setTodos] = useState(
  ()=> JSON.parse(localStorage.getItem('todos')) || [] ); //callback function here triggers only
  // on initial render and not when todos re-renders, which makes application faster.



  //if todos changes grab the value and set it into local storage. Stringify the object for local storage.
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

const { colorMode, toggleColorMode } = useColorMode()
 
  return (
   
      <VStack p={4}>
          <IconButton 
          icon={ colorMode ==='light'? <FaMoon /> : <FaSun /> } 
          isRound='true' 
          size='lg' 
          alignSelf="flex-end" 
          onClick={toggleColorMode} />

          <Heading 
          mb="8" 
          fontWeight="extrabold" 
          size="3xl" 
          bgGradient="linear(to-r, teal.500, green.300, pink.500)" 
          bgClip="text" >Todo App

          </Heading>

          <TodoList todos={ todos } deletetodo={ deleteToDos } />

          <AddToDo addToDo={addToDO} />

      </VStack>
    
  );
}

export default App;

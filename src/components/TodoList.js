import React from 'react';
import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';


const TodoList = () => {

    const todos = [
        {
            id:1,
            body: 'get bread',
        },
        {
            id:2,
            body: 'get butter'
        },
    ];
  return (
    <VStack 
    divider={<StackDivider />}
    borderColor="gray.200"
    borderWidth="2px"
    p="4"
    borderRadius="lg"
    w="100%"
    maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl:'40vw'}}
    alignItems="stretched"
    >
        
      {todos.map(todo=>(
          <HStack key={todo.id}>
              <Text>{todo.body}</Text>
              <Spacer/>
              <IconButton icon={<FaTrash />} isRound='true' />
          </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
import React from 'react';
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge, Box } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';


const TodoList = ({ todos, deletetodo }) => {

    if(!todos.length){
        return(
            <Box >
                <Badge variant='outline' fontSize='0.8em'  colorScheme='green' p="4" m="8" borderRadius="lg">
                No ToDos today !
            </Badge>
            </Box>
            
        )
    }

    
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
              <IconButton onClick={() => deletetodo(todo.id)}  icon={<FaTrash />} isRound='true' />
          </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
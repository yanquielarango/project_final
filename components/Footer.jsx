import React from 'react';

/* Importing the components from the chakra-ui library. */
import { Flex, Text, Icon, Stack} from '@chakra-ui/react'

/* Importing the icons from the react-icons library. */
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';



const Footer = () => {

/* Getting the current year. */
  const date = new Date().getFullYear()

  return (  
      <Flex flexDirection="column" justify="center" alignItems="center" pt='3rem' pb='1rem' >
        <Text marginBottom='0.5rem' color='blue.800' fontWeight="bold" fontSize='lg'>© {date} All rights reserverd</Text>
        <Stack direction='row' spacing='5' cursor='pointer'>
          <Icon as={AiFillInstagram} w={8} h={8} color='blue.800'/>
          <Icon as={AiOutlineTwitter} w={8} h={8} color='blue.800' />
        </Stack>
      </Flex>
    
  )
}

export default Footer
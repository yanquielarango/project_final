import React from 'react';
import { Flex, Text, Icon, Stack} from '@chakra-ui/react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';



const Footer = () => {

  const date = new Date().getFullYear()

  return (  
      <Flex flexDirection="column" justify="center" alignItems="center" paddingY='3rem' >
        <Text marginBottom='1rem' color='gray.500'>{date}  All rights reserverd</Text>
        <Stack direction='row' spacing='5' cursor='pointer'>
          <Icon as={AiFillInstagram} w={6} h={6} color='gray.600'/>
          <Icon as={AiOutlineTwitter} w={6} h={6} color='gray.600' />
        </Stack>
      </Flex>
    
  )
}

export default Footer
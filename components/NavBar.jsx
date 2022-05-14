import { Container, Stack, Box,  Divider,  Heading, Icon, Text, Badge, Avatar} from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaUserCircle} from 'react-icons/fa';


import DrawerExample from './Cart';

const NavBar = () => {

  return (
    <Container  maxW='container.xxl' >
      <Stack>
        <Stack alignItems='center' direction='row' justifyContent='space-between' paddingY={4}>
          <Heading as='h1' size='xl' color='teal.600'>
            <Link href='/'>
              <Text
                bgGradient='linear(to-r, gray.400, red.700)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'
                cursor='pointer'
              >
                Ecommerce
              </Text>
            </Link>
          </Heading>
            <Box  cursor='pointer'>
              <Avatar w={7} h={7} marginRight='.5rem'/>
              <Icon as={AiOutlineShopping } w={7} h={7} position='relative' marginLeft='1rem'/>              
              <Badge bg='red.400' color='white' position='absolute' borderRadius='50%' w={6} h={6} top="4" right="2" >
              <Text fontSize='sm' fontWeight='bold'  textAlign='center' marginTop='1px'>10</Text>
            </Badge>
            </Box>
        </Stack>
        <Divider /> 
      </Stack>
    </Container>

 
  )
}

export default NavBar
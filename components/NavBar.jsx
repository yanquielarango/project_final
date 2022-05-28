/* Importing the components from the chakra-ui library. */
import {
  Container,
  Stack,
  Box,
  Divider,
  Heading,
  Icon,
  Text,
  Badge,
  Avatar,
} from "@chakra-ui/react";

import { BsBoxArrowInLeft } from "react-icons/bs";

import Link from "next/link";

import { useUser} from '@auth0/nextjs-auth0';


/* Importing the Cart component from the Cart.js file. */
import SliderCart from "./Cart";


const NavBar = () => {

    const { user } = useUser();

  return (
    <Container maxW="container.xl">
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        paddingY={4}
      >
        <Heading as="h1" size="xl" color="teal.600">
          <Link href="/">
            <Text
              bgGradient="linear(to-r, gray.400, red.700)"
              bgClip="text"
              fontSize={{base:'2xl', md:'4xl'}}
              fontWeight="extrabold"
              cursor="pointer"
            >
              HeadPhones
            </Text>
          </Link>
        </Heading>
        <Box cursor="pointer" display="flex" justify="center" align="center">
          <a href='/api/auth/login'>
          {user ? (
            
            <Stack direction='row' justify="center" align="center" spacing={4} fontSize='1.3rem'>
              <a href='/api/auth/logout'>
                <Icon as={BsBoxArrowInLeft} color="red"  fontSize="1.5rem" />
              </a>
              <Avatar src={user.avatar} name={user.name} w={8} h={8} />
              {/* <Link href='/api/auth/logout'>
              
              </Link> */}
            </Stack>
          ) : (
            
            <Avatar w={8} h={8} />
          )}
          </a>
          <SliderCart/>
        </Box>
      </Stack>

      <Divider />
    </Container>
  );
};

export default NavBar;

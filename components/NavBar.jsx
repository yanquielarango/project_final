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


import Link from "next/link";

/* Importing the Cart component from the Cart.js file. */
import SliderCart from "./Cart";


const NavBar = () => {
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
          {/* <Avatar w={8} h={8} /> */}
          <SliderCart/>
        </Box>
      </Stack>

      <Divider />
    </Container>
  );
};

export default NavBar;

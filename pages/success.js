import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/util";

import { Stack, Text, Icon, Button } from "@chakra-ui/react";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <Stack justify="center" align="center" marginTop='6rem' marginBottom='2rem'>
      <Stack
        w={{ base: "340px", md: "700px", lg: "800px" }}
    
        bg="blackAlpha.200"
        align="center"
        justify="center"
        borderRadius="10px"
        padding={{base:'1rem', md:'3rem'}}
      >
        <Icon as={BsBagCheckFill} color="green" w={{base:'2rem', md:'4rem'}} h={{base:'2rem', md:'4rem'}} marginBottom='0.4rem' />
        <Text color="blue.800" fontWeight="bold" lineHeight='1'  fontSize={{base:'1rem', md:'5xl'}}>
          Thank You For Your Order!
        </Text>
        <Text fontWeight="semibold">Check your email inbox for the receipt.</Text>

        <Stack  paddingTop='2rem'>
          <Text lineHeight='0.5' fontWeight="semibold">If you have any questions, please email</Text>
          <Text color="red" align="center" pb='1rem' fontWeight="semibold">
            <a href="mailto:yanquiel.arango@petalmail.com">
              yanquiel.arango@petalmail.com
            </a>
          </Text>
        </Stack>

        <Link href="/"  >
          <Button colorScheme="red" size="lg"  w={{md:'50%'}} >
            Continue Shopping
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Success;

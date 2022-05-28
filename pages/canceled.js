
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";




import { Stack, Text, Icon, Button } from "@chakra-ui/react";

const Success = () => {
  



  return (
    <Stack justify="center" align="center" marginTop='6rem' marginBottom='90%'>
      <Stack
        w={{ base: "340px", md: "700px", lg: "800px" }}
    
        bg="blackAlpha.200"
        align="center"
        justify="center"
        borderRadius="10px"
        padding={{base:'2rem', md:'3rem'}}
      >
    
        
        <Text fontWeight="semibold" fontSize={{base:'lg', md:'xl'}} marginBottom="2rem">Forgot to add something to your cart? Shop around then come back to pay!</Text>

       

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

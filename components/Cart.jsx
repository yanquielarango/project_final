import React, { forwardRef } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  Badge,
  Text,
  Stack,
  Flex,
  Image,
  StackDivider
} from "@chakra-ui/react";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";

import { BsCart2 } from "react-icons/bs";

import { urlFor } from "../lib/client";

import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";

const SliderCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = forwardRef;

  const { totalQuantity, totalPrice, cartItems, decQty, incQty, qty } = useStateContext();

  const closeCart = () => {
    onClose();
  };

  return (
    <>
      <Icon
        as={BsCart2}
        w={7}
        h={7}
        position="relative"
        marginLeft="1rem"
        ref={btnRef}
        onClick={onOpen}
      />
      {cartItems.length > 0 && (
        <Badge
          bg="red.400"
          color="white"
          position="absolute"
          borderRadius="50%"
          w={6}
          h={6}
          top={{ base: "2", md: "3" }}
          right={{ base: "2", "2xl": "8.2%" }}
        >
          <Text
            fontSize="sm"
            fontWeight="bold"
            textAlign="center"
            marginTop="1px"
          >
            {totalQuantity}
          </Text>
        </Badge>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Stack
              direction="row"
              spacing={3}
              align="center"
              cursor="pointer"
              onClick={closeCart}
            >
              <AiOutlineLeft />
              <Text fontSize="md" fontWeight="bold">
                Your Cart
              </Text>
              <Text fontSize="sm" fontWeight="bold" color="red.800">
                ({totalQuantity} items)
              </Text>
            </Stack>
          </DrawerHeader>

          <DrawerBody>
            {cartItems.length < 1 ? (
              <Flex
                paddingY="5rem"
                direction="column"
                justify="center"
                align="center"
              >
                <Image
                  src="/assets/shop.webp"
                  alt="empty cart"
                  objectFit="cover"
                  boxSize="220px"
                />
                <Text fontSize="1.2rem" fontWeight="semibold" color="red.800">
                  Your shopping bag is empty
                </Text>
              </Flex>
            ) : (
              <Stack direction="column" spacing={4}>
                {cartItems.map((item) => (
                  <Stack  direction='row' >
                      <Image
                        src={urlFor(item.image[0])}
                        boxSize="100px"
                        objectFit="cover"
                        bg="blackAlpha.100"
                        borderRadius="10px"
                      />
                      
                    <Stack direction='row' spacing={20} >     
                      <Text color='blue.800' fontWeight="bold"> {item.name}</Text>           
                      <Text color='blue.800' fontWeight="bold"> {item.price} zl</Text>
                    </Stack>
                  <Stack>
                    
                  </Stack>        
                  </Stack>
                  
                  
                ))}
                
              </Stack>
              
              
            )}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SliderCart;

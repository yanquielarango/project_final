import React, { ref } from "react";
import Link from "next/link";

/* Importing all the components from the chakra-ui library. */
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
  StackDivider,
  Button,
} from "@chakra-ui/react";

/* Importing the icons from the react-icons library. */
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";

/* Importing the icons from the react-icons library. */
import { BsTrash } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";

/* A helper function that is used to generate the image url. */
import { urlFor } from "../lib/client";

/* A toast notification library. */
import toast from "react-hot-toast";

/* Importing the useStateContext hook from the StateContext.js file. */
import { useStateContext } from "../context/StateContext";

import getStripe from "../lib/getStripe";


const SliderCart = () => {
  /* A hook that is used to open and close the drawer. */
  const { isOpen, onOpen, onClose } = useDisclosure();

  /* A reference to the button that opens the drawer. */
  const btnRef = ref;
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const closeCart = () => {
    onClose();
  };

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id})
  }

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
            {totalQuantities}
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
                ({totalQuantities} items)
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
                <Link href="/">
                  <Button onClick={closeCart} size="lg" colorScheme="red">
                    Continue Shoping
                  </Button>
                </Link>
              </Flex>
            ) : (
              <Stack gap="2rem">
                {cartItems.map((item) => (
                  <Flex gap="1rem">
                    <Image
                      src={urlFor(item.image[0])}
                      boxSize={{ base: "115px", md: "130px" }}
                      objectFit="cover"
                      bg="blackAlpha.100"
                      borderRadius="10px"
                    />
                    <Stack>
                      <Stack
                        direction={{base:'column', md:'row'}}
                        width={{ base: "210px", md: "240px" }}
                        justify={{base:'flex-start', md:'space-between'}}
                        align={{base:'flex-start', md:'space-between'}}
                      >
                        <Text
                          color="blue.800"
                          fontSize={{ base: "1rem", md: "1.2rem" }}
                          fontWeight="bold"
                        >
                          {item.name}
                        </Text>
                        <Text
                          color="black"
                          fontSize={{ base: "15px", md: "1.2rem" }}
                          fontWeight="semibold"
                        >
                          {item.price} zl
                        </Text>
                      </Stack>
                      <Stack>
                        <Stack
                          direction="row"
                          justify="space-between"
                          marginTop={{ base: "1rem", md: "3rem" }}
                          align="center"
                        >
                          <Stack
                            direction="row"
                            borderWidth="1px"
                            justify="center"
                            alignItems="center"
                            divider={<StackDivider borderColor="gray.200" />}
                            padding=".3rem"
                          >
                            <Icon
                              as={AiOutlineMinus}
                              color="red"
                              onClick={() =>
                                toggleCartItemQuanitity(item._id, "dec")
                              }
                              cursor="pointer"
                            />
                            <Text paddingX=".4rem">{item.quantity}</Text>
                            <Icon
                              as={AiOutlinePlus}
                              color="green"
                              onClick={() =>
                                toggleCartItemQuanitity(item._id, "inc")
                              }
                              cursor="pointer"
                            />
                          </Stack>
                          <Stack>
                            <Icon
                              as={BsTrash}
                              color="red"
                              boxSize={{ base: "1.4rem", md: "1.6rem" }}
                              cursor="pointer"
                              onClick={() => onRemove(item)}
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Flex>
                ))}
              </Stack>
            )}

            {cartItems.length >= 1 && (
              <Stack>
                <Flex
                  justify="space-between"
                  align="center"
                  padding="2rem"
                  marginTop="2rem"
                >
                  <Text fontSize="3xl" fontWeight="bold">
                    SubTotal :
                  </Text>
                  <Text fontWeight="bold" fontSize="2xl">
                    {totalPrice} zł
                  </Text>
                </Flex>
                <Flex justify="center">
                  <Button colorScheme="red" size="lg" onClick={handleCheckout}>
                    PAY WITH STRIPE
                  </Button>
                </Flex>
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

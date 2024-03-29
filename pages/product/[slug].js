/* Importing the components from the Chakra UI library. */
import {
  Flex,
  Text,
  Icon,
  Stack,
  Heading,
  Button,
  StackDivider,
  Container,
  Box,
  useDisclosure
} from "@chakra-ui/react";


/* Importing the client and urlFor functions from the client.js file. */
import { client, urlFor } from "../../lib/client";


/* Importing the icons from the react-icons library. */
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

/* Importing the Product and Carousel components from the components folder. */
import Product from "../../components/Product";
import Carousel from "../../components/Carousel";

/* Importing the useStateContext hook from the StateContext.js file. */
import { useStateContext } from "../../context/StateContext";


/* Importing the styles from the Carousel.module.css file. */
import styles from "../../style/Carousel.module.css";



const ProductDetails = ({ product, products }) => {
  /* Destructuring the product object and the useStateContext object. */
  const { name, details, price, rating, numReviews } = product;

  const { qty, incQty, decQty, onAdd } = useStateContext();

  const { isOpen, onOpen } = useDisclosure();


  const handleBuyNow = () => {
    onAdd(product, qty);
    
  }


  return (
    <>
      <Container maxWidth="container.lg">
        <Stack
          direction={["column", "row"]}
          marginTop={20}
          justify="center"
          paddingX="1rem"
        >
          <Box flex={1} justify="space-between ">
            <Carousel product={product} />
          </Box>

          <Stack flex={1}>
            <Text color="blue.800" fontSize="2rem" fontWeight="bold">
              {name}
            </Text>
            <Flex>
              {Array(rating)
                .fill(0)
                .map((_, i) => (
                  <Icon as={AiFillStar} key={i} color="red" />
                ))}

              {Array(5 - rating)
                .fill(0)
                .map((_, i) => (
                  <Icon as={AiOutlineStar} key={i} color="red" />
                ))}

              <Text
                fontSize="12px"
                marginLeft=".3rem"
                marginTop="-2px"
                color="blue.800"
                fontWeight="bold"
              >
                {numReviews < 4
                  ? `(${numReviews} view)`
                  : `(${numReviews} views)`}
              </Text>
            </Flex>
            <Heading as="h3" size="small" color="blue.800">
              Details:
            </Heading>
            <Text fontSize="sm">{details}</Text>
            <Text
              fontSize="1.8rem"
              marginTop="1rem"
              color="red"
              fontWeight="bold"
              paddingBottom="1rem"
            >
              {price} zł
            </Text>
            <Stack direction="row">
              <Text
                marginTop=".2rem"
                paddingRight="1rem"
                color="blue.800"
                fontWeight="bold"
              >
                Quantity:
              </Text>
              <Stack
                direction="row"
                borderWidth="1px"
                justify="center"
                alignItems="center"
                divider={<StackDivider borderColor="gray.200" />}
                padding=".3rem"
              >
                <Icon as={AiOutlineMinus} color="red" onClick={decQty}  cursor='pointer'/>

                <Text paddingX=".4rem">{qty}</Text>
                <Icon as={AiOutlinePlus} color="green" onClick={incQty} cursor='pointer' />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              paddingY="1.4rem"
              paddingX={{ base: "2rem", md: "0" }}
              spacing={8}
            >
              <Button
                colorScheme="red"
                variant="outline"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </Button>
              <Button colorScheme="red" variant="solid" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth="container.xl">
        <Flex direction="column">
          <Text
            fontSize={{ base: "1.5rem", md: "2.5rem" }}
            align="center"
            fontWeight="bold"
            color="blue.800"
            marginBottom="-2rem"
            marginTop="2rem"
          >
            You May Also Like
          </Text>
          <Stack
            width="100%"
            align="center"
            justify="center"
            height="400px"
            overflowX="hidden"
            position="relative"
          >
            <Flex gap="15px" position="absolute" className={styles.track}>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

/**
 * It fetches all the products from the Sanity database, and then creates a path for each product.
 *
 * The paths are then returned to Next.js, which will then create a page for each product.
 *
 * The fallback: 'blocking' means that Next.js will wait for the function to finish before rendering
 * the page.
 *
 * If you don't want to wait for the function to finish, you can set the fallback to
 * 'unstable_blocking' or 'unstable_async'.
 *
 * If you set the fallback to 'unstable_blocking', Next.js will render the page, but it will not be
 * able to pre-render the page.
 *
 * If you set the fallback to 'unstable_async', Next.js will render the page, but it will not be able
 * to pre-render the page.
 * @returns An object with two properties:
 * - paths: An array of objects with a params property.
 * - fallback: A string with the value 'blocking'.
 */

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
        }
        `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

/**
 * It fetches the product data from the Sanity API and returns it as props to the page.
 * @returns The product and all products.
 */
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;

import Link from 'next/link';
import { Flex, Stack, Text, Image } from '@chakra-ui/react'
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <Flex  cursor="pointer" _hover = { { transform: "scale(1.1,1.1)", transition: " transform .5s ease " } } >
      <Link href={`/product/${slug.current}`}>      
        <Stack >
          <Image 
            src={urlFor(image && image[0])}
            objectFit='cover'
            boxSize='200px'
            bg='blackAlpha.100'
            borderRadius='10px'
            
          />
          <Stack direction="row" justify="space-between" paddingX='1'>
          <Text fontSize='sm' color='blue.800' fontWeight='bold'>{name}</Text>
          <Text fontSize='sm' color='black' fontWeight='bold' >{price}zł</Text>
          </Stack>
        </Stack>
      </Link>
    </Flex>
  )
}

export default Product
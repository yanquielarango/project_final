import React, {useState} from 'react'
import { Stack, Image} from '@chakra-ui/react'
import { client, urlFor } from '../lib/client'

const Carousel = ({product}) => {
    const { image } = product
    const [ index, setIndex ] = useState(0)
    return (
    <Stack cursor='pointer' >
        <Image src={urlFor(image && image[index])} bg='blackAlpha.200' _hover={{background:'red.500', transition: " background .5s ease-in-out " }}  borderRadius='lg' w={350} h={{base:'300', md:'350'}}   marginBottom='.5rem'  />
        <Stack direction='row'>
        {image?.map((item, i) => (
            <Image 
                key={i}
                src={urlFor(item)}
                onClick={() => setIndex(i)}
                w={16} h={16}
                bg={i === index ? 'red.500' : 'blackAlpha.200'}
                borderRadius='xl'
            
                />
        ))}
        </Stack>
    </Stack>
    )
}

export default Carousel
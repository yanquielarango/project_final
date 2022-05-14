import Link from 'next/link'
import { Flex, Box, Text, Heading, Image, Stack, Spacer, Button} from '@chakra-ui/react'
import { urlFor } from '../lib/client'

const HeroBaner = ({heroBanner}) => {
  return (

    <Flex  >
        <Box bg='blackAlpha.200'  boxShadow='base'  w='100%' h='450px'  borderRadius='10px' marginTop='20px' pos='relative' >
          <Box paddingY='5rem' paddingX='2rem'  >
            <Text>
              {heroBanner.smallText}
            </Text>
            <Heading as='h3' fontSize={{ base: '1.8rem', md: '40px', lg: '56px' }} color='blue.800' >
              {heroBanner.midText}
            </Heading>
            <Heading as='h1' fontSize={{ base: '2.4rem', md: '6rem', lg: '8rem' }} color='white' lineHeight='.8' marginTop='10px' >
              {heroBanner.largeText1}
            </Heading>
            <Image src= {urlFor(heroBanner.image)} pos='absolute' top={{base: '-15', md: '-10', xl:'-20'}} boxSize={{base: '300px', md: '400px', xl:'500px'}} right={{base:'-10', md: '5', xl: '10rem', '2xl': '20rem'}}  />
          </Box>
            <Stack direction='row' >
              <Link href='/product/ID'>
                <Button  colorScheme='red' size='md'  marginTop={{base: '5', md:'0'}} marginLeft={{base:'5', md:'10'}}>{heroBanner.buttonText} </Button>
              </Link>
            
            </Stack>
            <Stack direction='column' alignItems='center' justifyContent='center' position='absolute' right={{md:'30', '2xl':'40'}} bottom={{md:'10'}}>
                <Spacer/>
                <Heading as='h5' fontSize='1rem' color='blue.700' paddingX='5'   marginTop='2' alignSelf='end' >Description</Heading>
                <Text fontSize='12px' color='gray.500'  paddingX='5'  textAlign='justify'  w={{base: '300px', md: '250'}} >{heroBanner.desc}</Text>

            </Stack>
            
            
        </Box>
      
    </Flex>

  )
}

export default HeroBaner;
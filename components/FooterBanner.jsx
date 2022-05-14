import React from 'react';
import Link from 'next/link';
import { Flex, Box, Text, Heading, Image, Stack, Spacer, Button} from '@chakra-ui/react'

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
    return (        
        <Stack bg='red.500'  boxShadow='base'  w='100%' h={{base: '500px', md:'400px'}} borderRadius='10px' marginTop={{base:'3.5rem', md:'6rem'}} pos='relative'>
          <Stack paddingY={{base:'4rem', md:'5rem', lg:'6rem'}} paddingX='2rem'  color='white' direction={{base:'column', md:'row'}} spacing={{md:'5rem'}} >            

              <Stack flex={1} >
                <Text >
                  {discount}
                </Text>
                <Heading as='h3' fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }}  fontWeight='800' paddingX={{base:'.2rem', md:'1rem'}} >
                  {largeText1}
                </Heading>
                <Heading as='h1' fontSize={{ base: '3rem', md: '4rem', lg: '5rem' }} color='white' lineHeight='.8' marginTop='10px' paddingX={{base:'.2rem', md:'1rem'}} fontWeight='800' >
                  {largeText2}
                </Heading>
                <Text   marginTop='1.5rem'   paddingY='2rem' fontSize={{md:'1.2rem'}}>{saleTime}</Text>
              </Stack>
            
            <Stack  paddingY={{md:'1rem'}} width={{md:'300px' ,lg:'400px'}} >
              <Text  marginTop='-1rem' >{smallText}</Text>
              <Heading as='h3' fontSize={{ base: '2rem', md: '2.9rem', lg: '3.9rem' }}  fontWeight='800' >{midText}</Heading>
              <Text  paddingTop={{md:'1rem'}}  fontSize='15px'>{desc}</Text>
              <Stack direction='row' >
                <Link href='/product/ID'>
                  <Button   bg='white'  size='md' color='red' cursor='pointer'   marginTop={{base: '2', md:'10', lg:'6'}} >{buttonText}  </Button>
                </Link>
              </Stack>   
            </Stack>
            <Image src= {urlFor(image)} pos='absolute' top={{base: '5', md: '-20', xl:'-6.5rem'}} boxSize={{base: '300px', md: '400px', xl:'550px'}} right={{base:'-8', md: '11rem', lg:'35%'  , xl: '30%', '2xl': '30%'}}  />
          </Stack>
            
                
        </Stack>
      
    
    )
    }

export default FooterBanner
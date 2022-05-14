import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const  DrawerExample = () => {
  

  
      return (
      <>
        
          <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          >
          <DrawerOverlay />
          <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Cart</DrawerHeader>
  
              <DrawerBody>
              <p>Cart</p>
              </DrawerBody>
  
              <DrawerFooter>
              
              </DrawerFooter>
          </DrawerContent>
          </Drawer>
      </>
      )
  }
export default DrawerExample
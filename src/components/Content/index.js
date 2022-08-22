import { Box, Flex,Input,InputGroup,InputRightElement } from '@chakra-ui/react'
import React, { useContext } from 'react'
import GetData from '../GetData'
import {TbSearch} from 'react-icons/tb'
import { GlobalProvider } from '../../../context/GlobalContext'

const Content = () => {

  const { 
    darkMode
 } = useContext(GlobalProvider)

  return (
   <>
    <Box
     p={'1rem'}
     w={'100%'}
     h={'calc(100vh - 70px)'}
     bg={darkMode ? 'rgba(0,0,0,.5)': 'transparent'}
    >
      <Flex
      mt={'1.5rem'}
      mb={'2rem'}
      >
          <InputGroup
                w={'100%'}
                maxW={'768px'}
                mx={'auto'}
          >
            <Input 
              placeholder='Search to user' 
              borderRadius={'10px'}
              bg={'rgba(250,250,250,.5)'}
              p={'1.25rem 3.7rem 1.25rem .7rem'}
              border={darkMode ? '2px solid  rgba(250,250,250,.7)' : '2px solid #000!important'}
              color={darkMode ? 'rgba(0,0,0,.5)':'#000'}
              _hover={{
                boxShadow:'none',
                border:darkMode ? '2px solid  rgba(250,250,250,.7)' :'none'
              }}
              _focus={{
                boxShadow:'none',
                border:darkMode ? '2px solid  rgba(250,250,250,.7)' :'none'
              }}
            />
          <InputRightElement 
              children={
                          <>
                            <Box 
                              color={darkMode ? 'rgba(0,0,0,.5)':'#fff'}
                              bg={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                              p={'.6rem'}
                              px={'1rem'}
                              mt={'.25rem'}
                              mr={'1.15rem'}
                              borderRadius={'10px'}
                              cursor={'pointer'}
                            >
                                <TbSearch/>
                              </Box>
                          </>
                        } 
            />
          </InputGroup>
      </Flex>
           <GetData/>
    </Box>
   </>
  )
}

export default Content
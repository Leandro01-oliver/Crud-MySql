import { Box, SimpleGrid, Text, Flex, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../context/GlobalContext'
import {GoTrashcan} from 'react-icons/go'
import {HiPencilAlt} from 'react-icons/hi'
import { handlerDeleteData } from '../../../utils/deleteData'
import ModalPut from '../ModalPut'

const GetData = () => {

  const { 
    darkMode,
    dado,
    setGetId,
    search,
    dadoFilter
 } = useContext(GlobalProvider)

 const { isOpen, onOpen, onClose } = useDisclosure()

  return (
   <>
    <SimpleGrid
    columns={{base:1,md:2,lg:3,xl:4}}
    gap={'30px'}
    >
      {
        search == "" ?
        dado?.map(d=> {
          return(
          <>
        <Box
        key={d.id}
        w={{base:'100%',md:'350px',lg:'300px'}}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
        bg={darkMode ? 'rgba(0,0,0,.75)' : 'transparent'}
        borderRadius={'10px'}
        px={'1rem'}
        pt={'3rem'}
        pb={'1rem'}
        mx='auto'
        position={'relative'}
        >
          <Flex
            position={'absolute'}
            top={'1rem'}
            right={'1rem'}
          >
              <Flex
                w={'30px'}
                h={'30px'}
                borderRadius={'50%'}
                boxShadow={darkMode ? '0 0 8px 0 rgba(250,250,250,.7)' :'0 0 10px 0 rgba(0,0,0,.5)'}
                justify={'center'}
                align={'center'}
                cursor={'pointer'}
                color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
              onClick={()=>{onOpen();setGetId(d.id)}}
              >
              <HiPencilAlt/>
              </Flex>
              <ModalPut isOpen={isOpen} onClose={onClose} />
              <Flex
                w={'30px'}
                h={'30px'}
                borderRadius={'50%'}
                boxShadow={darkMode ? '0 0 8px 0 rgba(250,250,250,.7)' :'0 0 10px 0 rgba(0,0,0,.5)'}
                justify={'center'}
                align={'center'}
                ml={'1rem'}
                cursor={'pointer'}
                color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                onClick={()=>{handlerDeleteData(d.id)}}
              >
                  <GoTrashcan/>
              </Flex>
          </Flex>
                  <Box
                    color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                    >
                      <Text>
                        {d.first_name}
                      </Text>
                    </Box>
                    <Box
                      color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                    >
                      <Text>
                      {d.last_name}
                      </Text>
                    </Box>
                </Box>
                </>
              )
            })
                    :
                    dadoFilter.map(f => {
                      return(
                          <>
                        <Box
                        key={f.id}
                        w={{base:'100%',md:'350px',lg:'300px'}}
                        boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                        bg={darkMode ? 'rgba(0,0,0,.75)' : 'transparent'}
                        borderRadius={'10px'}
                        px={'1rem'}
                        pt={'3rem'}
                        pb={'1rem'}
                        mx='auto'
                        position={'relative'}
                        >
                          <Flex
                            position={'absolute'}
                            top={'1rem'}
                            right={'1rem'}
                          >
                              <Flex
                                w={'30px'}
                                h={'30px'}
                                borderRadius={'50%'}
                                boxShadow={darkMode ? '0 0 8px 0 rgba(250,250,250,.7)' :'0 0 10px 0 rgba(0,0,0,.5)'}
                                justify={'center'}
                                align={'center'}
                                cursor={'pointer'}
                                color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                              onClick={()=>{onOpen();setGetId(f.id)}}
                              >
                              <HiPencilAlt/>
                              </Flex>
                              <ModalPut isOpen={isOpen} onClose={onClose} />
                              <Flex
                                w={'30px'}
                                h={'30px'}
                                borderRadius={'50%'}
                                boxShadow={darkMode ? '0 0 8px 0 rgba(250,250,250,.7)' :'0 0 10px 0 rgba(0,0,0,.5)'}
                                justify={'center'}
                                align={'center'}
                                ml={'1rem'}
                                cursor={'pointer'}
                                color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                                onClick={()=>{handlerDeleteData(f.id)}}
                              >
                                  <GoTrashcan/>
                              </Flex>
                          </Flex>
                                  <Box
                                    color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                                    >
                                      <Text>
                                        {f.first_name}
                                      </Text>
                                    </Box>
                                    <Box
                                      color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
                                    >
                                      <Text>
                                      {f.last_name}
                                      </Text>
                                    </Box>
                                </Box>
                          </>
                              )
                        })
     }
    </SimpleGrid>

    </>
  )
}

export default GetData
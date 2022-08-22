import React, { useContext } from 'react'
import {Flex} from '@chakra-ui/react';
import { GlobalProvider } from '../../../../context/GlobalContext';

const DarkMode = () => {

    const { 
        handlerDarkmode
    } = useContext(GlobalProvider)


  return (
   <>
    <Flex
    w={'30px'}
    h={'30px'}
    borderRadius={'50%'}
    boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
    ml={'1rem'}
    cursor={'pointer'}
    onClick={handlerDarkmode}
    >

    </Flex>
   </>
  )
}

export default DarkMode
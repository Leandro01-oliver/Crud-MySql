import React, { useContext } from 'react'
import {Flex} from '@chakra-ui/react';
import { GlobalProvider } from '../../../../context/GlobalContext';
import { WiSolarEclipse } from "react-icons/wi";
import { MdOutlineDarkMode } from "react-icons/md"

const DarkMode = () => {

    const { 
        handlerDarkmode,
        darkMode
    } = useContext(GlobalProvider)


  return (
   <>
    <Flex
    w={'30px'}
    h={'30px'}
    borderRadius={'50%'}
    boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
    ml={'1rem'}
    justify={'center'}
    align={'center'}
    cursor={'pointer'}
    fontSize={'1.25rem'}
    onClick={handlerDarkmode}
    >
      {
        darkMode ?
        <MdOutlineDarkMode/>
        :
        <WiSolarEclipse/>
      }
    </Flex>
   </>
  )
}

export default DarkMode
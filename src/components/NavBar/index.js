
import { Flex } from '@chakra-ui/react'
import React from 'react'
import Content from '../Content'
import DarkMode from './DakMode'
import LogoNav from './Logo'
import NavLink from './NavLink'

const NavBar = () => {

  return (
    <>
      <Flex
       justify={'space-between'}
       align={'center'}
       h={'70px'}
       px={'1rem'}
       boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
      >
        <LogoNav/>
        <Flex
        align={'center'}
        >
             <NavLink/>
             <DarkMode/>
        </Flex>
      </Flex>
      <Content/>
    </>
  )
}

export default NavBar
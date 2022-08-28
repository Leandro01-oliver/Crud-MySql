import { Button, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ModalForm from '../../Modal'
import {AiOutlineHome} from 'react-icons/ai'
import {FiCreditCard} from "react-icons/fi";

const NavLink = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    let link = [
        {
            nome: 'Home',
            icon:<AiOutlineHome/>,
            href:'/'
        },
        {
            nome: 'Create',
            icon:<FiCreditCard/>,
            ml:'1rem',
            click: onOpen
        }
    ]

  return (
   <>
      {
        link.map(l => {
            return(
                <>
                <a href={l.href}>
                    <Button
                    onClick={l.click}
                    ml={l.ml}
                    >
                        {l.icon}<Text ml={".5rem"}>{l.nome}</Text>
                    </Button>
                </a>
                </>
            )
        })
      }
      <ModalForm isOpen={isOpen} onClose={onClose}/>
   </>
  )
}

export default NavLink
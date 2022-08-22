import { Button, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ModalForm from '../../Modal'

const NavLink = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    let link = [
        {
            nome: 'Home',
            icon:<></>,
            href:'/'
        },
        {
            nome: 'Create',
            icon:<></>,
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
                        {l.icon}<Text>{l.nome}</Text>
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
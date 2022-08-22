import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../context/GlobalContext';

import FormData from './FormData';

const ModalPut = (props) => {

  const { 
    darkMode
  } = useContext(GlobalProvider)

  
  return (
    <>
      <Modal 
       isOpen={props.isOpen} 
       onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent
        pt={'2.5rem'}
        bg={darkMode ? 'rgba(0,0,0,.75)' : '#fff'}
        >
          <ModalCloseButton color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}/>
          <ModalBody>
            <FormData />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalPut
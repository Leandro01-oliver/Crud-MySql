import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { GlobalProvider } from '../../../../context/GlobalContext';
import { handlerPostData } from '../../../../utils/postData';

const FormData = () => {

 const { 
    firstName,
    setFirstName,
    lastName,
    setLastName,
    darkMode
  } = useContext(GlobalProvider);

  return (
   <>
   
   <form
   w={'100%'}
   onSubmit={(e)=>{
      e.preventDefault();
      handlerPostData(firstName,lastName)
   }}
   >
      <Box>
         <FormLabel
      color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
         >
            FirstName :
         </FormLabel>
         <Input 
            onChange={(e) => setFirstName(e.target.value)}
            color={darkMode ? 'rgba(250,250,250,.7)':'#000'}
            placeholder={'Insert to firstname'}
         />
      </Box>
      <Box
      mt={'.5rem'}
      >
         <FormLabel
            color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
         >
            LastName :
         </FormLabel>
         <Input 
            onChange={(e) => setLastName(e.target.value)}
            color={darkMode ? 'rgba(250,250,250,.7)':'#000'}
            placeholder={'Insert to lastname'}
            />
      </Box>
      <Button 
            mt={'2rem'}
            mb={'1rem'}
            w={'100%'}
            type={'submit'}
            >
                Cadastrar
            </Button>
   </form>
   </>
  )
}

export default FormData
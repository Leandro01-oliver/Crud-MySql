import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalProvider } from '../../../../context/GlobalContext';
import handlerPutData from '../../../../utils/putData';

const FormData = () => {

 const { 
    firstName,
    setFirstName,
    lastName,
    setLastName,
    darkMode,
    getId
  } = useContext(GlobalProvider);

  const [getIdData,setGetIdData] = useState([]);

  const [firstNameBtn,setFirstNameBtn] = useState(false);

  const handlerBtnFirstName = () => setFirstNameBtn(!firstNameBtn);

  const [lastNameBtn,setLastNameBtn] = useState(false);

  const handlerBtnLastName = () => setLastNameBtn(!lastNameBtn);

  useEffect(()=>{
    axios.get(`/api/getAll/${getId}`)
    .then((result)=>{
      setGetIdData(result.data)
    }).catch((err)=>{
      console.log(err)
    });
  },[])

  return (
   <>
   
   <form
   w={'100%'}
   onSubmit={(e)=>{
      e.preventDefault();
      handlerPutData(getId,firstName,lastName)
   }}
   >
                        <Box>
         <FormLabel
      color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
         >
            FirstName :
         </FormLabel>
         <Input 
            // value={getIdData != "" && firstNameBtn ?  null : d.first_name}
            type={'text'}
            onChange={(e) => setFirstName(e.target.value)}
            color={darkMode ? 'rgba(250,250,250,.7)':'#000'}
            placeholder={'Insert to firstname'}
            // onClick={handlerBtnFirstName}
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
         //  value={getIdData != "" && lastNameBtn ? null : d.last_name}
            type={'text'}
            onChange={(e) => setLastName(e.target.value)}
            color={darkMode ? 'rgba(250,250,250,.7)':'#000'}
            placeholder={'Insert to lastname'}
            // onClick={handlerBtnLastName}
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
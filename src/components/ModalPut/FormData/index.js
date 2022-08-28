import { Box, Button, FormLabel, Input } from '@chakra-ui/react'
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
    getId,
    setImg,
    img,
  } = useContext(GlobalProvider);

  const [getIdData,setGetIdData] = useState([]);

  useEffect(()=>{
    axios.get(`/api/getAll/${getId}`)
    .then((result)=>{
      setGetIdData(result.data)
    }).catch((err)=>{
      console.log(err)
    });
  })

  return (
   <>
   
   <form
   w={'100%'}
   onSubmit={(e)=>{
      e.preventDefault();
      handlerPutData(getId,firstName,lastName,img);
   }}
   >
        <Box>
      <FormLabel
        htmlFor='imagem'
        border={'2px dashed #000'}
        p={'1rem'}
        borderRadius={'10px'}
        color={darkMode ? 'rgba(250,250,250,.7)' : '#000'}
         >
            Imagem :
         </FormLabel>
         <Input 
            id={'imagem'}
            display={'none'}
            type={'file'}
            onChange={(e) => {setImg(e.target.files[0])}}
            color={darkMode ? 'rgba(250,250,250,.7)':'#000'}
            placeholder={'Insert to firstname'}
         />
      </Box>
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
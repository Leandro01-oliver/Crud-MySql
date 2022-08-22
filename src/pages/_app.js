import { ChakraProvider } from '@chakra-ui/react'
import { InfoContext } from '../../context/GlobalContext'

function MyApp({ Component, pageProps }) {
  return (
    <InfoContext> 
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </InfoContext> 
  )
}

export default MyApp
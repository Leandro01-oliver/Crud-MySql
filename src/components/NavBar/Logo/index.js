import React from 'react'
import Image from 'next/image';
import Logo from '../../../../public/logo.jpg';

const LogoNav = () => {
  return (
    <>
      <Image
        src={Logo}
        width={'50px'}
        height={'50px'}
        alt={'imagem'}
        style={{
          borderRadius:'50%'
        }}
      />
    </>
  )
}

export default LogoNav
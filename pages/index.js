import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Botao from '@/componentes/botao'
import Avatar from '@/componentes/avatar'
import { UploadImagem } from '@/componentes/uploadImagem'
import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [imagem, setImagem] = useState(null);

  console.log(imagem);

  return (
    <>
      <h1>Olá Mundo!</h1>
      <UploadImagem setImagem={setImagem} imagemPreview={imagem?.preview}/>
      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularclique={() => console.log('Botão clicado')} />
      </div>
    </>
  )
}

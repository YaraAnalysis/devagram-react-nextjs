import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Botao from '@/componentes/botao'
import Avatar from '@/componentes/avatar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularclique={() => console.log('Botão clicado')} />
      </div>
    </>
  )
}

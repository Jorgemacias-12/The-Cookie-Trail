import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Ve al archivo index.ts para modificar el valor mostrado aquí,
        también puedes generar rutas de forma rápida y sencilla creando una carpeta con el
        nombre de la ruta dentro de pages/
      </p>
      <p>
        También en el directorio styles/ puedes ver todos los archivos css del proyecto, de momento 
        este proyecto solo contiene la carpeta de componentes, pages, styles, y por último.
        Dentro de pages se encuentra una api, la cual para este ámbito de proyecto no vamos a utilizar.
      </p>
    </>
  )
}
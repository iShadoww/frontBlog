import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Productos } from '../components/Productos'
import { useState } from 'react'

export type product = {
  category : string  ;
  description: string  ;
  id: number  ;
  price: number  ; 
}

type HomeProps = {
  productos: product[]
}

const Home= ({productos}: HomeProps) => {
  const [datos, setDatos] = useState(productos)
  return (
    <>
    <Productos productos={datos}/>

    </>
  )
}

export const getServerSideProps: GetServerSideProps  = async (context) => {
  
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const productos = await response.json();

  return {
    props:{
      productos: productos
    }
  }
}

export default Home

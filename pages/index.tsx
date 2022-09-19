import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Productos } from '../components/Productos'
import { useState } from 'react'

{/*export type product = {
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
    <Productos/>

    </>
  )
}

<div>
  {
    Productos.map(product =>(
      <div key={product.id}>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    ))
  }
</div>
*/}

interface IndexPageProps{
  data:{
    id: string
    description: string
    price: number
    category: number
  }[];
}

export default function IndexPage({ data }: IndexPageProps){
  console.log(data);
  return (
    <>
    <h1>Fetching Data from an API</h1>
    <p>
      API:  <a href='https://fakestoreapi.com/'>https://fakestoreapi.com/</a>
    </p>
    <ul>
      {
        data.map(({id, category, description, price}) => (
          <li key={id}>{category}{description}{price}</li>
        ))
        }
    </ul>
    </>
  );
}



export const getServerSideProps: GetServerSideProps  = async (context) => {
  
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await response.json();
  //pass data to the page via props
  return {
    props:{
      data
    }
  }
}


import { GetServerSideProps } from 'next'




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


import { client } from '../../scripts/importSanityData.mjs';
import Image from 'next/image';

const Home = async () => {
  const response = await client.fetch ("*[_type=='product']{productName ,price ,category ,inventory ,colors ,status ,description, image{asset->{url}}}")

  return (
    <div className='container flex gap-3 flex-wrap mt-5 mx-auto'>
      {response.map((item : any,key : any) => {
        return (
          <div key={item.id} className='hover:transition-transform duration-300 hover:scale-105 border border-black rounded-md space-y-2 px-1'>
            <Image src={item.image.asset.url} alt={item.productName} width={300} height={400} className='object-cover'></Image>
            <h1 className='py-1 font-medium'>{item.productName}</h1>
            <h2>{item.category}</h2>
            <h3>{item.color}</h3>
            <h3 className='text-red-800 font-bold'>$ {item.price}</h3>
          </div>
        )
      })}
    </div>
  )
}



export default Home

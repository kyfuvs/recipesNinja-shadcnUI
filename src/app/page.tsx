import Image from 'next/image'
import Recipes from './recipes/pages';


export default async function Home() {
  
  return (
   <main>
    <div >
     <Recipes/>
    </div>
   
   </main>
   
  )
}

import Image from 'next/image'
import construction from '../public/const.png'



export default function Home() {
  return (
    <main className="text-[80px] text-center items-center justify-center text-blue-400 flex flex-col gap-7 mt-40 ">
       <h1 className=" font-semibold  ">Under construction</h1> 
      <Image src={construction} alt='profile pic' width={1000} height={1000}/>
    </main>
  )
}

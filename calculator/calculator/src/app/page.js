import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // function handleClick() {
  //   console.log("clicked")

  // }
  return (
    <main className="">
      
      <h1>HomePage</h1>
      <button className="button"><Link href="/calculator">Click Here</Link></button>
    
    </main>
  )
}

import Image from 'next/image'
import Hero from './components/Hero'
import Menulist from './components/MenuList'

export default function Home() {
  return (
    <div>
      <Hero />
      <Menulist />
    </div>
  )
}

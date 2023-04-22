import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Header from './components/header'
import Body from './components/body'
import Values from './components/values'
import Footer from './components/footer'
import Body2 from './components/body2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='scrollbar-none'>
      <Navbar/>
      <Header/>
      <Body2/>
      <Body/>
      <Values/>
      <Footer/>
    </main>
  )
}

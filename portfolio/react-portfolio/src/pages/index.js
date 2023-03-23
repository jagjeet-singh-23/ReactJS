import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>My Portfolio</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
              <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Jagjeet Singh</h2>
            <h3 className='text-2xl py-2'>Web Developer and Tech Enthusiast</h3>
            <p className='text-md py-5 leading-8 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='text-5xl  flex justify-center gap-16 py-3 text-gray-200 '>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden'>
            todo
          </div>
        </section>
      </main>
    </>
  )
}
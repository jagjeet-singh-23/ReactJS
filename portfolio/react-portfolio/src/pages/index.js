/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import design from '/home/frustrated-dev/ReactJS/portfolio/react-portfolio/public/design.png'
import code from '/home/frustrated-dev/ReactJS/portfolio/react-portfolio/public/code.png'
import consulting from '/home/frustrated-dev/ReactJS/portfolio/react-portfolio/public/consulting.png'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
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
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden'>
            todo
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-5 leading-8 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Egestas diam in arcu cursus euismod quis viverra nibh cras. Bibendum enim facilisis gravida neque convallis a cras. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
            <p className='text-md py-5 leading-8 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Egestas diam in arcu cursus euismod quis viverra nibh cras. Bibendum enim facilisis gravida neque convallis a cras. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
          </div>

          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start'>
            <div className='text-center shadow-lg bg-gradient-to-b from-teal-500 p-10 rounded-xl my-10 lg:my-0 lg:mr-10 lg:w-1/3 xl:w-1/4'>
              <Image className='mx-auto' src={design} width={100} height={100} />
              <h3 className='pt-8 pb-2 font-medium text-lg'>Beautiful Designs</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-300 py-1'>Photoshop</p>
              <p className='text-gray-300 py-1'>Figma</p>
              <p className='text-gray-300 py-1'>Canva</p>
            </div>
            <div className='text-center shadow-lg bg-gradient-to-b from-green-500 p-10 rounded-xl my-10 lg:my-0 lg:mx-10 lg:w-1/3 xl:w-1/4'>
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className='pt-8 pb-2 font-medium text-lg'>Web Development</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className='py-4 text-green-600'>Skills I have</h4>
              <p className='text-gray-300 py-1'>HTML/CSS</p>
              <p className='text-gray-300 py-1'>JavaScript</p>
              <p className='text-gray-300 py-1'>React</p>
            </div>
            <div className='text-center shadow-lg bg-gradient-to-b from-purple-500 p-10 rounded-xl my-10 lg:my-0 lg:ml-10 lg:w-1/3 xl:w-1/4'>
              <Image className='mx-auto' src={consulting} width={100} height={100} />
              <h3 className='pt-8 pb-2 font-medium text-lg'>Digital Marketing</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className='py-4 text-purple-600'>Marketing channels I use</h4>
              <p className='text-gray-300 py-1'>Social Media</p>
              <p className='text-gray-300 py-1'>Email</p>
              <p className='text-gray-300 py-1'>SEO</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className='text-3xl py-2'>Portfolio</h3>
          <p className='text-md py-5 leading-8 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Egestas diam in arcu cursus euismod quis viverra nibh cras. Bibendum enim facilisis gravida neque convallis a cras. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
          <p className='text-md py-5 leading-8 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Egestas diam in arcu cursus euismod quis viverra nibh cras. Bibendum enim facilisis gravida neque convallis a cras. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
        </section>
      </main>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import banner from "../public/images/banner.png";
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mike Misiura</title>
        <meta name="description" content="Mike Misiura Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <div className='m-3 text-center'>
          <Image
            src={banner}
            alt="banner"
            height={200}
          />
          <h1 className='mt-5'>Welcome to my website!</h1>
          <p>I am a full stack web developer who specializes in React and Typescript. </p>
          <h2 className='mt-5'>Let me build your next website!</h2>
          <p>I can take care of everything from web design to hosting your website on the cloud using Amazon Web Services (AWS).</p>
          <p>This will allow you to focus on what matters to you instead of being bogged down in the details of web design.</p>
        </div>
      </main>
    </>
  )
}

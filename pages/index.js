import Head from 'next/head'
import Navbar from '../components/Navbar';
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact';

export default function Home() {
    return (
    <div>
      <Head>
        <title>Dariusz Jendryczka Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Darek Mem..png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
        {/* <footer className=' text-center py-3 m-10 dark:text-gray-200'>
          <p>2023 Dariusz Jendryczka</p>
        </footer> */}
      

    </div>
  )
}

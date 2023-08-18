import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
import HomeC from './components/HomeC'

export default function Home() {
  return (
    <>
    <main className={style.main}>
      <HomeC />
    </main>
    </>
  )
}

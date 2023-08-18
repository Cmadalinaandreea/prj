import Link from "next/link";
import type { Metadata } from 'next'
import AboutC from '../components/AboutC'

export const metadata: Metadata = {
  title: 'About - e-learning',
  description: 'About page',
  
}

export default function About() {
    //throw new Error("test") 
  return (
   <div className="text-center mt-10">
    <AboutC />
   </div>
  )
}

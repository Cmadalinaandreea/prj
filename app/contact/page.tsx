import Link from "next/link";
import type { Metadata } from 'next'
import ContactC from '../components/ContactC'

export const metadata: Metadata = {
  title: 'Contact - e-learning',
  description: 'Contact page',
  
}

export default function Contact() {
    //throw new Error("test") 
  return (
   <div className="text-center mt-10">
    <ContactC />
   
    
   </div>
  )
}

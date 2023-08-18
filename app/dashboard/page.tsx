import Link from "next/link";
import type { Metadata } from 'next'
import DashboardC from '../components/DashboardC'

export const metadata: Metadata = {
  title: 'Dahsboard - e-learning',
  description: 'Dashboard page',
  
}

export default function Dashboard() {
    //throw new Error("test") 
  return (
   <div>
  
   <DashboardC />
    
   </div>
  )
}

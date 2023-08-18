import Link from "next/link";
import type { Metadata } from 'next'
import VideoCardC from'../components/VideoCardC'


const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export const metadata: Metadata = {
  title: 'Profile - e-learning',
  description: 'Profile page',
  
}

export default function Profile() {
    //throw new Error("test") 
  return (
   <div className="text-center mt-10">
    <p>Profile page</p>

    <div className="grid grid-cols-3 gap-2 place-items-center h-48">
   <div><VideoCardC
  videoTitle="Titlul videoclipului"
  videoDescription="Descrierea videoclipului..."
  videoUrl="/videos/video.mp4"
/></div>
<div><VideoCardC
  videoTitle="Titlul videoclipului"
  videoDescription="Descrierea videoclipului..."
  videoUrl="/videos/video.mp4"
/></div>

    </div>
  

    <Link href='/'>Return Home</Link>
   </div>
  )
}

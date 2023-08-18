'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Se pare ca ai cam dat de probleme</h2>
      <button
      className='bg-black p-3 px-5'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Da si tu Refresh
      </button>
    </div>
  )
}
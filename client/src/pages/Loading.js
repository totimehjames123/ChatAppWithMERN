import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <img src={'logo.jpeg'} alt='ChatApp' width='200' height='200' className='animate-bounce'/>
      </div>
    </div>
  )
}

export default Loading

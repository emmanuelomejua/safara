import React from 'react'
import Image from '../components/ui/Image';

const FearturedPost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Image src='/featured1.jpeg' alt='' className='rounded-3xl object-cover' />

        </div>
       
       <div className="w-full lg:w-1/2 flex flex-col gap-4">
       Other posts
       </div>
    </div>
  )
}

export default FearturedPost;

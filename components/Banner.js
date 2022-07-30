import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[600px] md:h-[700px] lh:h-[600px] 2xl-h[700px]'>
            <Image src="https://links.papareact.com/0fm" layout='fill' objectFit='cover' />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-gray-500 text-sm sm:text-lg'>Not sure where top go ? Perfect.</p>
                <button className='text-purple-500 bg-white px-10 py-4 rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition durable-150'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
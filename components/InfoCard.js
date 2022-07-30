import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'


function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className='my-2 flex py-7 px-2 pr-4  cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t border-b'>
            <div className='relative h-24 w-80 md:h-52 md:w-80 flex-shrink-0'>
                <Image src={img} layout="fill" objectFit='cover' />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>
                <h4 className='text-xl'>{title}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <div className='flex items-center'>
                        <p><StarIcon className='h-5 text-red-400' /></p>
                        {star}
                    </div>
                    <div>
                        <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                        <p className='text-right font-extralight text-gray-500 flex-grow'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
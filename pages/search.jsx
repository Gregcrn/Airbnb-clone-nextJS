import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from 'next/router';
import { format } from 'date-fns';

function Search({ searchResults }) {

    const router = useRouter();

    const { location, startDate, endDate, noOfGuests } = router.query;


    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate}-${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guest${noOfGuests > 1 ? 's' : ''}`} />
            <main className='flex'>
                <section className=' flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} numbers of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='px-4 py-2 shadow-md rounded-full cursor-pointer hover:shadow-lg active:scale-90 transistion transform duration-100 ease-out'>Cancellation Flexibility</p>
                        <p className='px-4 py-2 shadow-md rounded-full cursor-pointer hover:shadow-lg active:scale-90 transistion transform duration-100 ease-out'>Type of place</p>
                        <p className='px-4 py-2 shadow-md rounded-full cursor-pointer hover:shadow-lg active:scale-90 transistion transform duration-100 ease-out'>Roooms and Beds</p>
                        <p className='px-4 py-2 shadow-md rounded-full cursor-pointer hover:shadow-lg active:scale-90 transistion transform duration-100 ease-out'>More filter</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;


export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

    return {
        props: {
            searchResults,
        }
    }
}
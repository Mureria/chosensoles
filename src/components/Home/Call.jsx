import React from 'react'
import Container from '../Container'
import { FaSearch } from 'react-icons/fa'

// import data from '../../utils/data'

const Call = () => {

    const data = ['Nike', 'Adidas', 'New Armor', 'Converse', 'New Balance']

  return (
    <Container>
        {/* User name */}
        <h3 className='text-2xl py-2'>Hi, Ireri</h3>
        <h1 className='text-3xl md:text-3l lg:text-4xl font-bold'>Step Up Your Shoe Game With Our Premium Shoes.</h1>

        {/* Search */}
        <div className='ax-w-[1200px] mx-auto lg:my-8 my-4 relative'>
          <form action="" className='' >
            <input type="text" placeholder='Search Shoe' className='w-full md:w-[400px] bg-slate-100  border border-gray-200 p-2 rounded-full pl-10 outline-slate-300' />
          </form>
          <FaSearch color='lightgray' className='absolute top-4 left-4'/>
        </div>

        {/* Filter */}
        <div className='px-4 justify-between mt-10 hidden md:flex'>
            {data.map((item) => <p className='border px-8 py-2 rounded-full hover:bg-slate-100'>{item}</p>)}
        </div>








        {/* <div className=' px-4 justify-between my-10 hidden md:flex'> */}
         {/* {data.map((item) => <p className='border px-8 py-2 rounded-full hover:border-yellow-300'>{item}</p>)} */}
             {/* {data.map((brand, index) => (
         <li key={index}>{brand}</li>
       ))}
         </div> */} 

       
    </Container>
    )
}

export default Call
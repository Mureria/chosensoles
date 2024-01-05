import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'


const HotCategory = () => {
  return (
    <>
        <Container>
            <h1 className='text-2xl font-bold py-4 md:text-2xl'>Hot Categories</h1>
                <div className='grid gap-2  grid-cols-2 lg:grid-cols-4 lg:grid-rows-2  '>
                    <Link to='men' className='lg:col-span-2 lg:row-span-2 hover:translate-y-1 hover:ease-in-out duration-500'>
                        <img  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[300px] w-full object-cover rounded-xl'/>
                        <p to='men' className='mt-6 text-[18px] text-[#181818]   font-bold'>Men Shoes</p>
                    </Link>

                    <Link to='women' className='gap-2 lg:col-span-2 lg:row-span-1 hover:translate-y-1 hover:ease-in-out duration-500'>
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[150px] w-full  object-center object-cover rounded-xl'/>
                        <p  className='text-[18px] text-[#181818]  font-bold'>Women Shoes</p>
                    </Link>

                    <Link to='kids' className='gap-2 lg:col-span-2 lg:row-span-1 hover:translate-y-1 hover:ease-in-out duration-500'>
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[150px] w-full  object-center object-cover rounded-xl'/>
                        < p className='text-[18px] text-[#181818] font-bold'>Kids Shoes</p>
                    </Link>
                    
                </div>    
        </Container>
     
    </>
  )
}

export default HotCategory
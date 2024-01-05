import React from 'react'
import Container from '../Container';
import { Link } from 'react-router-dom';


const Collection = () => {

  const additionalStyles = {
    backgroundColor: 'rgb(241 245 249)',
    marginTop:'54px'
  }
  return (
    <>
        <Container customStyles={additionalStyles} >
          <div className='grid grid-cols-2 gap-2 py-20 px-8'>
            <div className='flex  flex-col justify-center items-start'>
              <h1 className='pb-10 md:pb-20 text-3xl md:text-5xl font-bold'>Shop through our collection</h1>
              <Link to='collection'><p className='font-medium text-base md:text-base border border-gray-800 py-3 px-5 rounded-md hover:bg-black hover:text-white ease-in-out duration-700'>Shop now</p></Link>
            </div>
            <div className='flex justify-center items-center'>
              <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
            </div>
          </div>
        </Container>        

    </>
  )
}

export default Collection
import React from 'react'
import saf from '../../assets/mpesa.png'
import airtel from '../../assets/airtel.png'
import visa from '../../assets/visa.webp'
import lipapay from '../../assets/lipapay.webp'
import Container from '../Container'

const Partners = () => {
  return (
    <Container>
         {/* <h2 className="text-sm md:text-xl  font-bold mb-1">Our Partners</h2> */}
       
       <div className='flex justify-between bg-slate-100 py-4 mb-16 px-2 rounded-md'>
       <div>
           <img src={saf} alt='mpesa logo' className='w-[100px] h-full object-contain'/>
       </div>
       <div>
           <img src={airtel} alt='airtel logo' className='w-[100px] h-full object-contain'/>
       </div>
       <div>
           <img src={lipapay} alt='airtel logo' className='w-[100px] h-full object-contain'/>
       </div>
       <div>
           <img src={visa} alt='airtel logo' className='w-[100px] h-full object-contain'/>
       </div>
       <div>
           <img src={airtel} alt='airtel logo' className='w-[100px] h-full object-contain'/>
       </div>
        </div>
    </Container>
           
  )
}

export default Partners
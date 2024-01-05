import React from 'react'
import  adidas from '../../assets/Air_jordan_logo_PNG1.png'
import nike from '../../assets/nikePNG.png'
import converse from '../../assets/converse-logo-PNG-9.png'
import newBalance from '../../assets/New_balance_logo_PNG3.png'
import puma from '../../assets/Puma_logo_PNG1.png'
import rebook from '../../assets/Reebok_logo_PNG6.png'
import vans from '../../assets/Vans_logo_PNG10.png'
import  sketchers from '../../assets/Skechers_logo_PNG1.png'
import  Lv from '../../assets/Louis_Vuitton_logo_PNG8.png'
import Container from '../Container'

const Slider = () => {
  
  return (
    <>
      <Container>
        <div className='flex gap-10  justify-between items-center shadow-md py-4'>
          <div>
            <img src={Lv} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={adidas} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={nike} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={newBalance} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={converse} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={vans} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={puma} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={rebook} alt="" className='w-[100px] object-contain' />
          </div>
          <div>
            <img src={sketchers} alt="" className='w-[400px] h-[100px] object-cover' />
          </div>
        </div>
          
      </Container>
          
          
    </>
  )
}

export default Slider
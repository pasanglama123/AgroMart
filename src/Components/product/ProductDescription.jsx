import React from 'react'
import {Link} from 'react-router-dom'
import backarrow from '../../assets/icons/backarrow.svg'

const ProductDescription = () => {
  return (
    <>
        <div className="top flex items-center space-x-7 bg-gradient-to-r from-[#057E0D] to-[#3CC442]">
            <Link to='/'>
              <img className='w-15 invert brightness-200 pl-4 ' src={backarrow} alt="" />
            </Link>
            <span className='font-bold text-2xl text-white '>Product Description</span>
        </div>
      
    </>
  )
}

export default ProductDescription
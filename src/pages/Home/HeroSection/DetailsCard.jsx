/* eslint-disable react/prop-types */

import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const DetailsCard = ({ title, description, route, icon }) => {
    return (
      <div className='py-[30px] px-5'>
        <div className='flex items-center justify-center'>
          <img src={icon} alt="icon" />
        </div>
  
        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>{title}</h2>
          <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>{description}</p>
  
          {/* Make this a component */}
          <Link to={route} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group  hover:bg-primaryColor hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>
    )
  }
export default DetailsCard
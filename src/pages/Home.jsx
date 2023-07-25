/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

import About from '../components/About'
import Services from '../components/Services'

import heroImage01 from '../assets/images/hero-img01.png'
import heroImage02 from '../assets/images/hero-img02.png'
import heroImage03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'


const CounterCard = ({ counter, detail, color }) => {
  return (
    <div>
      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>{counter}</h2>
      <span className={`w-[100px] h-2 ${color} rounded-full block mt-[-14px]`}></span>
      <p className='text__para'>{detail}</p>
    </div>
  )
}

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

const Home = () => {
  return (
    <>
      {/* Hero sec */}

      <section className='hero__section pt-[60px] md:px-10 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* Hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[46px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
                <p className="text__para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum at error dignissimos iusto, reiciendis illum ex. Doloremque ipsam, cupiditate, quisquam accusantium et officia rem tempore ex, quas vitae itaque quod!
                </p>

                <button className='btn'>Request an appointment</button>
              </div>

              {/* Hero counter */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <CounterCard counter={"30+"} detail={"Years of Experience"} color={"bg-yellowColor"} />
                <CounterCard counter={"15+"} detail={"Clinic Location"} color={"bg-purpleColor"} />
                <CounterCard counter={"100%"} detail={"Patient Satisfaction"} color={"bg-irisBlueColor"} />

              </div>



            </div>

            {/* Hero Content */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImage01} alt="heroImg1" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroImage02} alt="heroImg2" />
                <img className='w-full' src={heroImage03} alt="heroImg3" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <DetailsCard title={'Find a Doctor'} description={'World-class care for everyone. Our health system offers unmatched, expert health care, from lab to the clinic.'} route={'/doctors'} icon={icon01}/>
            <DetailsCard title={'Find a Location'} description={'Know the locations where we provide our services.'} route={'/doctors'} icon={icon02}/>
            <DetailsCard title={'Book Appointment'} description={'We provide best services on your convinuent time. Our health system offers unmatched, expert health care in all possible manner.'} route={'/doctors'} icon={icon03}/>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services section */}
      <Services />
    </>
  )
}

export default Home
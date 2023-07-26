import CounterCard from './CounterCard'
import DetailsCard from './DetailsCard'

import heroImage01 from '../../../assets/images/hero-img01.png'
import heroImage02 from '../../../assets/images/hero-img02.png'
import heroImage03 from '../../../assets/images/hero-img03.png'
import icon01 from '../../../assets/images/icon01.png'
import icon02 from '../../../assets/images/icon02.png'
import icon03 from '../../../assets/images/icon03.png'

const index = () => {
    return (
        <>
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
                        <DetailsCard title={'Find a Doctor'} description={'World-class care for everyone. Our health system offers unmatched, expert health care, from lab to the clinic.'} route={'/doctors'} icon={icon01} />
                        <DetailsCard title={'Find a Location'} description={'Know the locations where we provide our services.'} route={'/doctors'} icon={icon02} />
                        <DetailsCard title={'Book Appointment'} description={'We provide best services on your convinuent time. Our health system offers unmatched, expert health care in all possible manner.'} route={'/doctors'} icon={icon03} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
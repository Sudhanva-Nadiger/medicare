/* eslint-disable react/prop-types */

const CounterCard = ({ counter, detail, color }) => {
    return (
      <div>
        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>{counter}</h2>
        <span className={`w-[100px] h-2 ${color} rounded-full block mt-[-14px]`}></span>
        <p className='text__para'>{detail}</p>
      </div>
    )
  }

export default CounterCard
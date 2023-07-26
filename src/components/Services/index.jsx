import ServicesList from './ServicesList'

const index = () => {
    return (
        <section>
            <div className="container">
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center'>Our medical services</h2>
                    <p className='text__para text-center'>
                        World class care for everyone. Our health System offers unmatched. Expert health care.
                    </p>
                </div>

                <ServicesList />
            </div>
        </section>
    )
}

export default index
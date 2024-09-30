import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <div className="mt-10">
            <h1 className="text-xl sm:text-2xl lg:text-6xl text-center">What are <span className="text-orange-500">Popole Saying</span></h1>
            <div className="flex   flex-wrap justify-center">
                {testimonials.map((item, index) => {
                    return (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
                            <div className=" rounded-md  p-6  text-md  border border-neutral-900 font-thin">
                                <p>{item.text}</p>
                                <div className="flex  mt-3">
                                    <img className="w-12 h-12 rounded-full " src={item.image} alt="item.user" />
                                    <div>
                                        <h1 className="px-3">{item.user}</h1>
                                        <span className="text-sm font-normal italic text-neutral-600 px-3">{item.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials

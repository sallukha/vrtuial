import { CheckCircle } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"
const WorkFlow = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl mt-6 text-center">
                Accelarate your  <span className="text-orange-500">coding workflow.</span>

            </h1>

            <div className="flex   flex-wrap justify-center">
             <div className="p-2 w-full  lg:w-1/2">
                 <img src={codeImg} alt="code" />
             </div>
             <div className="pt-12 w-full lg:w-1/2">
                  {checklistItems.map((item,index)=>{
                    return(
                     <div key={index} className="flex mb-12 ">
                        <div className="text-green-500 bg-neutral-900 p-2 h-10 w-10 justify-center items-center rounded-full">
                            <CheckCircle/>
                             
                            
                        </div>
                        <div className="">
                                <h1 className="m-1 mb-2 text-xl" >{item.title}</h1>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                     </div>

                    )

                  })}
             </div>
            </div>
        </div>
    )
}

export default WorkFlow

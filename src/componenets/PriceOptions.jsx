import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants";

const PriceOptions = () => {
    return (
        <div className="mt-10">
            <h1 className="text-xl sm:text-3xl lg:text-5xl text-center">Price</h1>
            <div className="flex flex-wrap mt-10 ">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
                        <div className="p-10 border border-neutral-700  rounded-lg">
                            <p className="text-4xl mb-8">
                                {option.title}{" "}
                                {option.title.toLowerCase() === "pro" && (
                                    <span className="text-orange-500">(Most Popular)</span>
                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl  mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-500 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((item, index) => {
                                    return (
                                        <li key={index} className="mt-5 flex items-center">
                                            <CheckCircle2 />
                                            <span className="ml-2">{item.features}</span>
                                        </li>
                                    )

                                })}
                            </ul>
                            <a href="" className=" inline-flex justify-center 
                            items-center text-center w-full h-12 p-5 mt-20 tracking-tight 
                            text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">

                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;

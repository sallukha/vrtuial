import { features } from "../constants";

const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="text-orange-500 bg-neutral-900 rounded-full text-sm py-2 px-4 uppercase">
          Feature
        </span>
        <h1 className="my-20 font-bold text-3xl sm:text-4xl lg:text-8xl tracking-wide">
          Easily build <span className="text-orange-500">your code</span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((item, index) => {
          return (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
              <div className="flex items-center mx-6 mb-10">
                <div
                  className="flex h-12 w-12 bg-neutral-900 text-orange-700 
                  justify-center items-center rounded-full"
                >
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-xl">{item.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

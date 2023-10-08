

import banner from "../../public/assets/banner.jpg"
import Services from "./Services";
const Home = () => {
  
    return (
        <div className="">
            <div className="relative">
                <img className="lg:h-[500px] w-full" src={banner} alt="" />
                <div className="absolute w-full top-[200px]">
                    <div className="flex items-center">
                        <h2 className="text-5xl text-white font-bold mx-auto">Want to make your life easier? Then hire us..</h2>
                    </div>
                </div>
            </div>
            <Services></Services>
           
        </div>
    );
};

export default Home;
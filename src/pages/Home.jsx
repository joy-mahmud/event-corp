

import banner from "../../public/assets/banner.jpg"
import Contact from "../components/Contact";
import Services from "./Services";
const Home = () => {
  
    return (
        <div className="">
            <div className="relative">
                <img className=" h-[250px] md:h-[400px] lg:h-[500px] w-full" src={banner} alt="" />
                <div className="absolute w-full top-[100px] md:top-[180px] lg:top-[200px]">
                    <div className="flex items-center">
                        <h2 className=" text-xl md:text-4xl lg:text-5xl text-white font-bold mx-auto">Want to make your life easier? Then hire us..</h2>
                    </div>
                </div>
            </div>
            <Services></Services>
           <Contact></Contact>
        </div>
    );
};

export default Home;
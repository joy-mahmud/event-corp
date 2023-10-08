import { useLoaderData } from "react-router-dom";
import GallaryCard from "../components/GallaryCard";


const Gallary = () => {
    const gallaryData = useLoaderData()
    console.log("gallary:",gallaryData)
    return (
        <div className="mb-10">
            <h2 className="mb-5 text-5xl text-center">Our successull services</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:container lg:mx-auto">
                {
                    gallaryData.map((item, idx) => <GallaryCard key={idx} data={item}></GallaryCard>)
                }
            </div>
        </div>
    );
};

export default Gallary;
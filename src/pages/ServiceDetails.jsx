import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";




const ServiceDetails = () => {
    const serviceid = useParams()
    // const [servicedata, setServiceData] = useState([])
    // const [serviceItem,setserviceItem] =useState(null)
    //  const Item = servicedata.find(item => item.id == serviceid.id)
    //  setserviceItem(Item)
    // // const { img, title, longdesription, price } = serviceItem
    // console.log("service data",servicedata,serviceItem,serviceid.id)
    // useEffect(() => {
    //     fetch("../../public/services.json")
    //         .then(res => res.json())
    //         .then(data => setServiceData(data))
    // }, [])
    const data = useContext(AuthContext)
    const{servicedata} = data
    const serviceItem = servicedata.find(item => item.id == serviceid.id)
    const {img,title,longDescription,price} = serviceItem


    return (
        <div>
            <div className="container mx-auto relative">
                <img className="w-full h-[200px] lg:h-[500px]" src={img} alt="" />
                <div className="absolute w-full top-[200px] flex items-center justify-center"><div className="btn btn-secondary flex flex-col"><p className="">Get this service.</p><p>price:{price}</p></div></div>
                <div className="mb-10">
                    <h2 className="font-semibold text-5xl my-2">{title}</h2>
                    <p className="text-2xl">{longDescription}</p>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;
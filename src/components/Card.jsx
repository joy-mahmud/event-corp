
 import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

const Card = ({ cardInfo }) => {
    const { id,title, img, price, shortDescription } = cardInfo
    const navigate =useNavigate()

    const HandleShowDetails = (id)=>{
        navigate(`/serviceDetails/${id}`)
    }


    return (
        <div className="bg-[#E5E6E6] rounded-lg flex flex-col justify-between">
            <img className="rounded-t-lg w-full h-[250px] mb-1" src={img} alt="" />
            <div className="px-3 space-y-1">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <p>{shortDescription}</p>
            </div>
            <div className="flex justify-between px-3 mb-3 mt-2  items-center"><button className="btn btn-secondary w-1/2" onClick={()=>HandleShowDetails(id)}>Show details</button> <p className=" font-medium text-[#CC009C]">Price: {price}</p></div>
        </div>
    );
};

Card.propTypes ={
    cardInfo:PropTypes.object
}
export default Card;
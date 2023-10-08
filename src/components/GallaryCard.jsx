

const GallaryCard = ({ data }) => {
    const {img,title,place} = data
  
    return (
        <div>
            
                <img className="rounded-t-lg h-[250px]" src={img} alt="" />
                <h2 className="text-2xl ">{title}</h2>
                <p className="">place: {place}</p>
        </div>
    );
};

export default GallaryCard;
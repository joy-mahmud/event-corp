import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const Services = () => {
    const cardData = useLoaderData()
    return (
        <div>
            <h2 className="text-center font-semibold text-4xl my-10">Our services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {
                    cardData.map(card => <Card key={card.id} cardInfo={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;
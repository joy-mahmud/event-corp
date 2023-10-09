import { useEffect, useState } from "react";
import TestimonyCard from "./TestimonyCard";


const Testimony = () => {
    const [testimony, setTestimony] = useState([])

    useEffect(() => {
        fetch('/testimony.json')
            .then(res => res.json())
            .then(data => setTestimony(data))
    }, [])

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-4xl font-semibold mb-5 text-center">Clients feedBack</h2>
            <div className="grid  md:grid-cols-3 lg:grid-cols-3  gap-3">
                {
                    testimony.map(item => <TestimonyCard key={item.id} cardData={item}></TestimonyCard>)
                }
            </div>

        </div>
    );
};

export default Testimony;
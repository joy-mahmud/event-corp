import { ImQuotesLeft,ImQuotesRight } from 'react-icons/im';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const TestimonyCard = ({ cardData }) => {
    const { img, id, author, colour, quote, position } = cardData
    const sliceData = quote.slice(0,400)
    let fade
    if(id==1){
         fade="fade-right"
    }
    if(id==2){
         fade ="fade-up"
    }
    if(id==3){
         fade = "fade-left"
    }

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div data-aos={fade} className="bg-slate-300 rounded-lg flex flex-col justify-between">
            <div className='p-5'>
                <ImQuotesLeft style={{color:colour}}></ImQuotesLeft>

                <p className='mt-3'>
                    {sliceData}
                </p>
                <div className='flex justify-end'>
                <ImQuotesRight style={{color:colour}}></ImQuotesRight>
                </div>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center mb-3'>
                    <img className='w-[180px] h-[180px] rounded-full' src={img} alt="" />
                    <p className='font-medium'>{position}</p>
                </div>
                <div style={{ backgroundColor: colour }} className=" h-[100px] md:h-[150px] lg:h-[200px]" ></div>
            </div>
        </div>
    );
};

export default TestimonyCard;
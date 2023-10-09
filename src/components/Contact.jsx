
import { FiPhoneCall } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';


const Contact = () => {
    return (
        <div >
            <div className='bg-[#E5E6E6] grid md:grid-cols-2 lg:grid-cols-2 lg:container mx-auto my-10 space-y-auto'>

                <div className=" h-[150px] md:h-[200px] lg:h-[300px] flex flex-col items-center justify-center ml-10">
                    <div>
                        <h2 className='text-2xl font-medium'>Contact us:</h2>
                        <div className='flex items-center gap-2'><FiPhoneCall></FiPhoneCall> <p>+880123456789</p></div>
                        <div className='flex items-center gap-2'><CiMail></CiMail><p>eventorp123@gmail.com</p></div>
                    </div>
                </div>
                <div className=" h-[150px] md:h-[200px] lg:h-[300px] flex flex-col justify-center items-center lg:items-start">
                    
                    <h2 className='text-2xl font-medium'>want to ask anything?</h2>
                    <input className="w-1/2 outline-none border-2 border-slate-800 px-2 py-1 rounded-lg mt-5" type="text" />
                    

                </div>
            </div>
        </div>
    );
};

export default Contact;
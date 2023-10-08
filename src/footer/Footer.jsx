import iconf from "../../public/assets/facebook 1.png"
import icont from "../../public/assets/twitter 1.png"
import iconi from "../../public/assets/instagram 1.png"

const Footer = () => {
    return (
        <div className="p-20 bg-[#22213F] text-white mt-10">
            <div className="flex flex-col justify-center items-center gap-5">
                <a className="font-semibold text-4xl text-white">CorpEvent<span className="bg-red-500 rounded-lg px-2 text-white">Pro</span> </a>
                <div className="flex gap-6">
                    <img src={iconf} alt="" />
                    <img src={icont} alt="" />
                    <img src={iconi} alt="" />
                </div>
                <p> 2023 All rights reserved . corpEvnetPro</p>
            </div>
        </div>
    );
};

export default Footer;
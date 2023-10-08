import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col  gap-5 mt-[200px] justify-center items-center">
            <h2 className="text-5xl font-semibold">404!!! Page not Found</h2>
            <button className="btn"><Link to={"/"}>Go to home</Link> </button>
        </div>
    );
};

export default ErrorPage;
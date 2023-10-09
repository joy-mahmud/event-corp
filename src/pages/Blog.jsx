import { useLoaderData } from "react-router-dom";
import BlogItem from "../components/BlogItem";


const Blog = () => {
    const blogArray = useLoaderData()

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-semibold">How to manage conference planning?</h2>
            <p>
                Managing conference planning is a comprehensive process that involves various tasks and responsibilities to ensure the successful execution of a conference. Here's a step-by-step guide on how to manage conference planning effectively:
            </p>
            <div className="ml-10">
                {
                    blogArray.map(blogs=>blogs.map(blog=><BlogItem key={blog.id} blogData={blog}></BlogItem>))
                }
                
            </div>
        </div>
    );
};

export default Blog;
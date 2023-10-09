

const BlogItem = ({ blogData }) => {
   const   { id,title, description } = blogData
    return (
        <div className="mb-5">
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="ml-5">{description}</p>
        </div>
    );
};

export default BlogItem;
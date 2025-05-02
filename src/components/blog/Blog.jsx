import PropTypes from "prop-types";
import { BiSolidBookmarks } from "react-icons/bi";


const Blog = ({ blog }) => {
    const { title, cover, reading_time, posted_date, author_image, author, hashtags } = blog;

    return (
        <div className="mt-8">
            <img className="w-full mb-2" src={cover} alt="" />
            <div className="flex justify-between  mb-2">
                <div className="flex">
                    <img className="rounded-full w-11" src={author_image} alt="" />
                    <div className="ml-2">
                        <h3 className="font-medium">{author}</h3>
                        <p className="text-gray-600">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-gray-500 font-semibold">{reading_time} min read</span>
                    <button className="ml-2 font-bold"><BiSolidBookmarks /></button>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
            <div>
                <h3 className="mt-1 text-gray-600">{hashtags}</h3>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;

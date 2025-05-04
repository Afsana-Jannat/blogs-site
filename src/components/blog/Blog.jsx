import PropTypes from "prop-types";
import { BiSolidBookmarks } from "react-icons/bi";


const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
    const { id, title, cover, reading_time, posted_date, author_image, author, hashtags } = blog;

    return (
        <div className="mt-8 shadow-md space-y-2 p-2">
            <img className="w-full mb-2 rounded-xl" src={cover} alt="" />
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
                    <button
                        onClick={() => handleAddBookmark(blog)}
                        className="ml-2 font-bold"><BiSolidBookmarks /></button>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
            <div>
                <h3 className="mt-1 pb-8 text-gray-600">{hashtags}</h3>
            </div>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className="text-purple-700 font-bold underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}

export default Blog;

import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
    const [blogs, setBolgs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBolgs(data))
    }, [])
    return (
        <div className='md:w-1/2'>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleMarkAsRead={handleMarkAsRead}
                    handleAddBookmark={handleAddBookmark}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [bolgs, setBolgs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBolgs(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Blogs;
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 border-b-2  max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
            <img className='rounded-full w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPV84vOeHJR0R6UbHZ4vA3EpaDXqObOdyMQhS6bQ0YC1GHoPZwwW0xRaRvEtWf_ij0R0&usqp=CAU" alt="" />
        </div>
    );
};

export default Header;
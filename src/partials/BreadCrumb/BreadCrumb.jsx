import React from 'react';

const Breadcrumb = ({ title, userName }) => {
    return (
        <div className="breadcrumb flex items-center px-4 mb-2 pt-4">
            <h1 className='text-sm font-medium text-gray-500 '> {title} </h1>
            <h1 className='text-xl font-medium text-gray-500 mx-2'> {`>`} </h1>
            <h1 className='text-sm font-medium text-gray-500 '> {userName} </h1>

        </div>
    );
};

export default Breadcrumb;
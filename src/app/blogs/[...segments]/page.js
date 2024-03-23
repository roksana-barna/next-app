import React from 'react';

const SingleBlog = ({params}) => {
    const [year,id] = params.segments;
    return (
        <div>
            Single blog{year} for {id}
        </div>
    );
};

export default SingleBlog;
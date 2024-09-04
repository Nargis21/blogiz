import LoadingCard from '@/components/ui/LoadingCard';
import { TBlog } from '@/types';
import React from 'react';

const BlogsLoadingPage = async () => {
    const res = await fetch('http://localhost:5000/blogs', {
        cache: "no-store"
    })
    const blogs = await res.json()
    return (
        <div className='my-10 w-[90%] mx-auto'>
            <div className='grid grid-cols-3 my-10 gap-5'>
                {
                    blogs?.map((blog: TBlog) => <LoadingCard key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default BlogsLoadingPage;
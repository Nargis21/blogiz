import { TBlog } from '@/types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
    return (
        <div className='my-10 w-[90%] mx-auto'>
            <h1 className='text-4xl text-center'>Latest Blogs from <span className='text-accent'>Blogiz</span></h1>
            <p className='text-gray-400 text-center italic w-2/4 mx-auto mt-2'>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</p>
            <div className='grid grid-cols-2 my-10 gap-5'>
                {
                    blogs.slice(0, 2).map(blog => <LatestBlogCard key={blog.id} blog={blog} />)
                }
            </div>
            <div className='grid grid-cols-3 my-10 gap-5'>
                {
                    blogs.slice(2, 5).map(blog => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>

        </div>
    );
};

export default LatestBlogs;
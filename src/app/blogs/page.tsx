"use client"
import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseAPi';
import { TBlog } from '@/types';
import React from 'react';

const BlogsPage = () => {
    // const res = await fetch('http://localhost:5000/blogs', {
    //     cache: "no-store"
    // })
    //    const blogs = await res.json()
    const { data: blogs } = useGetBlogsQuery(undefined)
    return (
        <div className='my-10 w-[90%] mx-auto'>
            <h1 className='text-4xl text-center'>All Blogs from<span className='text-accent'>Blogiz</span></h1>
            <p className='text-gray-400 text-center italic w-2/4 mx-auto mt-2'>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</p>
            <div className='grid grid-cols-3 my-10 gap-5'>
                {
                    blogs.map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>

        </div>
    );
};

export default BlogsPage;
import BlogDetails from "@/components/ui/BlogDetails";

type TBlogId = {
    blogId: string
}

const BlogDetailsPage = async ({ params }: { params: TBlogId }) => {

    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`)
    const blog = await res.json()

    return (
        <div className="my-10">
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;
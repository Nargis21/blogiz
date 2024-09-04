import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog } from "@/types";

type TBlogId = {
    blogId: string
}

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json()
    return blogs.slice(0, 3).map((blog: TBlog) => ({
        blogId: blog.id
    }))
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
import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blogs/${index}`}
            className="block p-4 bg-card rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-sm text-muted-foreground">{blog.date}</p>
            <p className="mt-2 text-muted-foreground">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
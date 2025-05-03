import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { MarkdownContent } from "@/components/ui/markdown-content";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return blogs.map((_, index) => ({
    id: index.toString(),
  }));
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogs[Number(params.id)];

  if (!blog) {
    notFound();
  }

  // Format date if it exists
  const formattedDate = blog.date ? new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-muted/30 py-20 pt-32 border-b">
        <div className="container mx-auto pl-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 backdrop:blur">{blog.title}</h1>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <time dateTime={blog.date}>{formattedDate}</time>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-xl shadow-md overflow-hidden">
            {/* Blog Description */}
            <div className="p-6 md:p-8 border-b bg-card/80">
              <p className="text-lg text-muted-foreground italic">{blog.description}</p>
            </div>
            
            {/* Main Content */}
            <article className="p-6 md:p-8 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary">
              <MarkdownContent content={blog.content} />
            </article>
          </div>

          {/* Media Sections */}
          {blog.media && (
            <div className="mt-10 space-y-10">
              {/* Images Section */}
              {blog.media.images && blog.media.images.length > 0 && (
                <section className="bg-card rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 md:p-8 border-b">
                    <h2 className="text-2xl font-semibold">Images</h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {blog.media.images.map((src, index) => (
                        <div key={index} className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
                          <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Videos Section */}
              {blog.media.videos && blog.media.videos.length > 0 && (
                <section className="bg-card rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 md:p-8 border-b">
                    <h2 className="text-2xl font-semibold">Videos</h2>
                  </div>
                  <div className="p-6 md:p-8 space-y-6">
                    {blog.media.videos.map((src, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <video controls className="w-full">
                          <source src={src} type="video/mp4" />
                        </video>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Links Section */}
              {blog.media.links && blog.media.links.length > 0 && (
                <section className="bg-card rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 md:p-8 border-b">
                    <h2 className="text-2xl font-semibold">Related Links</h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <ul className="space-y-3">
                      {blog.media.links.map((link, index) => (
                        <li key={index} className="group">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:underline group-hover:text-primary/80"
                          >
                            <span className="mr-2">→</span>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}
            </div>
          )}
          
          {/* Blog Navigation */}
          <div className="mt-12 pt-8 border-t">
            <Link 
              href="/#blogs"
              className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to all blogs
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
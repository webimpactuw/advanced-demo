import { client } from "@/sanity/lib/client";
import Container from "../components/container";
import BlogPostCard from "../components/BlogPost";

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <Container className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-4xl font-bold">Blog</h2>
        <p className="text-purple-600">
          Learn about the latest news and events in our community
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}

async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc) {
    title,
    description,
    date,
    "slug":slug.current,
    image
  }`;

  const posts = await client.fetch(query, { next: { revalidate: 84600 } });
  return posts;
}

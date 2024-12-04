import Image from "next/image";
import Container from "./components/container";
import Logo from "@/public/logo.png";
import { FilledButton, OutlinedButton } from "./components/buttons";
import { client } from "@/sanity/lib/client";
import BlogPostCard from "./components/BlogPost";
import Link from "next/link";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="flex flex-col gap-12 w-full justify-between text-gray-200 bg-purple-800">
        <Container className="flex flex-col-reverse items-center md:items-end md:flex-row gap-12 w-full justify-between py-8">
          <div className="flex flex-col gap-4 pb-8 h-fit">
            <p className="font-semibold">Welcome to our website</p>
            <h1 className="font-bold text-5xl">Hi, We&apos;re Web Impact</h1>
            <p>
              This is our demo website for Advanced Coding Workshops! Here,
              we&apos;ll have the latest information and updates on Web Impact UW,
              including how to get involved.{" "}
            </p>
            <div className="flex flex-col flex-wrap sm:flex-row gap-4">
              <Link href="/blog">
                <FilledButton>Read our blog</FilledButton>
              </Link>

              <Link href="/photos">
                <OutlinedButton>Check out our photos</OutlinedButton>
              </Link>
            </div>
          </div>
          <Image
            src={Logo}
            alt="Web Impact Logo"
            className="w-96 shrink-0"
            height={256}
            width={256}
          />
        </Container>
      </div>
      <div className="flex flex-col items-center pt-12 gap-2">
        <h2 className="font-bold text-4xl text-center">Latest Blog Posts</h2>
        <p className="text-purple-600 text-center">
          Check out our latest blog posts
        </p>
      </div>
      <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 3).map((e, index) => (
          <BlogPostCard key={index} post={e} />
        ))}
      </Container>
    </>
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

  const posts = await client.fetch(query, { next: { revalidate: 3600 } });
  return posts;
}

import { client } from "@/sanity/lib/client";
import Container from "@/app/components/container";
import BlogPostHeader from "../../components/BlogPostHeader";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export default async function Page({ params }) {
  const post = await getBlogPost(params.post);

  return (
    <Container>
      <div className="mx-auto max-w-5xl space-y-8 py-8">
        <BlogPostHeader post={post[0]} />
        <hr className="border-primary-200" />
        <Image
          width={1920}
          height={1080}
          alt={post[0].title}
          src={urlForImage(post[0].image).url()}
        />
        <article>
          <PortableText
            value={post[0].content}
            components={portableTextComponents}
          />
        </article>
      </div>
    </Container>
  );
}

async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug] {
    title,
    description,
    date,
    "slug":slug.current,
    image,
    content
  }`;

  const posts = await client.fetch(query, { slug });
  return posts;
}

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value).fit("max").auto("format").url()}
      width={width}
      height={height}
      alt=""
      loading="lazy"
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}

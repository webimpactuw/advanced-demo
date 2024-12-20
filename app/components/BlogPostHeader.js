import DatePill from "./DatePill";

export default function BlogPostHeader({ post }) {
  return (
    <header className="text-center space-y-4">
      <DatePill date={post.date} />
      <h1 className="font-semibold text-4xl">{post.title}</h1>
      <p className="font-medium text-purple-800 text-lg">{post.description}</p>
    </header>
  );
}

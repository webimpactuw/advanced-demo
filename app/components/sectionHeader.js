export default function SectionHeader({ title, text }) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-purple-400 font-medium">{text}</p>
    </div>
  );
}

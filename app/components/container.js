export default function Container({ children, className }) {
  return <div className={`max-w-7xl mx-auto p-4 lg:p-8 ${className}`}>{children}</div>;
}

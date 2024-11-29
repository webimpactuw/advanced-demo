export default function Footer() {
  return (
    <footer className="border-t text-center p-4 text-sm font-semibold bg-purple-100 text-purple-900 border-purple-100">
      <p>Me &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

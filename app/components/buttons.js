export function FilledButton({ children }) {
  return (
    <DefaultButton style="bg-purple-400 border-gray-400 text-gray-200 md:hover:bg-purple-600">
      {children}
    </DefaultButton>
  );
}

export function OutlinedButton({ children }) {
  return (
    <DefaultButton style="border-gray-400 text-gray-400 md:hover:border-purple-100 md:hover:text-purple-100">
      {children}
    </DefaultButton>
  );
}

function DefaultButton({ children, style }) {
  return (
    <button
      className={`inline font-medium border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
    >
      {children}
    </button>
  );
}

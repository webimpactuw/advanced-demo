import { format } from "date-fns";

export default function DatePill({ date }) {
  return (
    <p className="text-xs font-medium px-2 py-1 rounded-full bg-purple-400 text-gray-200 inline">
      {format(new Date(date), "MMMM dd, yyyy")}
    </p>
  );
}

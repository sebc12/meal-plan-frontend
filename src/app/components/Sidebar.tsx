import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-1/5 p-4 bg-gray-100 h-screen">
      <ul>
        <li className="mb-2">
          <Link href="/dashboard" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/dashboard/newWeek" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
            New week
          </Link>
        </li>
      </ul>
    </nav>
  );
}

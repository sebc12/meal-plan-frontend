import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-1/5 p-4 bg-gray-100 min-h-screen sticky top-0 ">
    <nav >
      <ul>
        <li className="mb-2">
          <Link href="/" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/newWeek" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
            New week
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/newRecipe" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
            New recipe
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

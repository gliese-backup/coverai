import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost text-xl"
        >
          CoverAI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/login"
              className="btn"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

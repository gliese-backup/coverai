import Link from "next/link";
import { getUserFromCookies } from "@/lib/getUser";
import { logout } from "@/actions/userController";

export default async function Header() {
  const user = await getUserFromCookies();

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
          {user && (
            <>
              <li className="mr-2">
                <Link
                  href="/create"
                  className="btn btn-secondary"
                >
                  Create
                </Link>
              </li>
              <li>
                <form
                  action={logout}
                  className="btn"
                >
                  <button>Log Out</button>
                </form>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link
                href="/login"
                className="btn"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

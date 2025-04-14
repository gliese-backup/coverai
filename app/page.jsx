import Link from "next/link";

import { register } from "@/actions/userController";

export default function Page() {
  return (
    <div className="min-h-[85vh] container mx-auto grid grid-cols-1 md:grid-cols-2 px-3">
      <div className="flex items-center">
        <h1 className="text-amber-400 text-3xl md:text-4xl font-light tracking-wide">
          CoverAI &mdash; Create Engaging Thumbnails <br />
          using GenAI
        </h1>
      </div>

      {/* Register Form */}
      <div className="flex items-start md:items-center">
        <form
          action="#"
          method="POST"
          className="w-full flex flex-col items-start"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input"
            autoComplete="off"
            required
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            autoComplete="off"
            required
          />
          <br />

          <button
            type="submit"
            className="btn"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

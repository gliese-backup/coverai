"use client";

import { useActionState } from "react";
import { login } from "@/actions/userController";

import Alert from "@/components/Alert";

export default function Page() {
  const [formState, formAction] = useActionState(login, {});

  return (
    <div className="min-h-[85vh] container mx-auto grid grid-cols-1 md:grid-cols-2 px-3">
      <div className="flex items-center">
        <h1 className="text-amber-400 text-3xl md:text-4xl font-light tracking-wide">
          Login to your account
        </h1>
      </div>

      <div className="flex items-start md:items-center">
        <form
          action={formAction}
          className="w-full flex flex-col items-start"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input mb-2"
            autoComplete="off"
            required
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input mb-2"
            autoComplete="off"
            required
          />

          <br />

          {formState.success == false && <Alert message={formState.message} />}

          <button
            type="submit"
            className="btn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

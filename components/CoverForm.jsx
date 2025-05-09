"use client";

import { useActionState } from "react";
import { createCover } from "@/actions/coverController";
import Alert from "@/components/Alert";

export default function CoverForm() {
  const [formState, formAction] = useActionState(createCover, {});

  return (
    <div className="flex items-start md:items-center">
      <form
        action={formAction}
        className="w-full flex flex-col items-start"
      >
        {/* Line 1 */}
        <div className="mb-3 w-full">
          <input
            type="text"
            name="line1"
            placeholder="line #1"
            className="input mb-2"
            autoComplete="off"
            required
          />
          <br />
          {formState?.errors?.line1 && (
            <Alert message={formState.errors?.line1} />
          )}
        </div>

        {/* Line 2 */}
        <div className="mb-3 w-full">
          <input
            type="text"
            name="line2"
            placeholder="line #2"
            className="input mb-2"
            autoComplete="off"
            required
          />
          <br />
          {formState?.errors?.line2 && (
            <Alert message={formState.errors?.line2} />
          )}
        </div>

        {/* Line 3 */}
        <div className="mb-3 w-full">
          <input
            type="text"
            name="line3"
            placeholder="line #3"
            className="input mb-2"
            autoComplete="off"
            required
          />
          <br />
          {formState?.errors?.line3 && (
            <Alert message={formState.errors?.line3} />
          )}
        </div>

        <button
          type="submit"
          className="btn"
        >
          Create
        </button>
      </form>
    </div>
  );
}

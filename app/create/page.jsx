import { getUserFromCookies } from "@/lib/getUser";
import { redirect } from "next/navigation";
import CoverForm from "@/components/CoverForm";

export default async function Page() {
  const user = await getUserFromCookies();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="min-h-[85vh] container mx-auto grid grid-cols-1 md:grid-cols-2 px-3">
      <div className="flex items-center">
        <h1 className="text-amber-400 text-3xl md:text-4xl font-light tracking-wide">
          Create your Cover
        </h1>
      </div>

      <CoverForm />
    </div>
  );
}

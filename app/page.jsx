"use client";

import RegisterForm from "@/components/RegisterForm";

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
        <RegisterForm />
      </div>
    </div>
  );
}

"use client";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-zinc-900">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
    </div>
  );
}

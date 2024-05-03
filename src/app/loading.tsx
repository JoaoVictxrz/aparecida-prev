"use client";
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-zinc-900">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900 dark:border-white"></div>
    </div>
  );
}

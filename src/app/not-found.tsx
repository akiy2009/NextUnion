// app/not-found.tsx または pages/404.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // `pages`使用時は `next/router`

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000); // 5秒でリダイレクト

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold animate-pulse">404</h1>
        <p className="text-2xl">ページが見つかりませんでした。</p>
        <p className="text-sm text-gray-400">5秒後にトップページへ戻ります...</p>
        <div className="mt-6 animate-bounce">
          <svg
            className="mx-auto w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        <p className="text-center max-w-md mb-4">
          Access all your important information and tools from one central location.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <Link href="/dashboard" className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Image
              src="/icons/dashboard.svg"
              alt="Dashboard icon"
              width={40}
              height={40}
              className="mb-3 dark:invert"
              priority
            />
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
              View your personalized dashboard
            </p>
          </Link>
          
          <Link href="/about" className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Image
              src="/icons/about.svg"
              alt="About icon"
              width={40}
              height={40}
              className="mb-3 dark:invert"
              priority
            />
            <h2 className="text-xl font-semibold">About</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
              Learn more about our platform
            </p>
          </Link>
          
          <Link href="/settings" className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Image
              src="/icons/settings.svg"
              alt="Settings icon"
              width={40}
              height={40}
              className="mb-3 dark:invert"
              priority
            />
            <h2 className="text-xl font-semibold">Settings</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
              Configure your account preferences
            </p>
          </Link>
          
          <Link href="/metrics" className="flex flex-col items-center p-6 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <Image
              src="/icons/metrics.svg"
              alt="Metrics icon"
              width={40}
              height={40}
              className="mb-3 dark:invert"
              priority
            />
            <h2 className="text-xl font-semibold">Core Metrics</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
              View your key performance indicators
            </p>
          </Link>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Infinity Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

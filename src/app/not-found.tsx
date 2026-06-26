import NextLink from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <NextLink
        href="/"
        className="mt-6 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Go home
      </NextLink>
    </div>
  );
}

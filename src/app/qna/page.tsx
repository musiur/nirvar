import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Ask a Question</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Share your questions with the community.
        </p>
      </div>
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
        <form>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              id="title"
              placeholder="Enter your question title"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="content"
            >
              Question
            </label>
            <textarea
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              id="content"
              placeholder="Enter your question details"
              rows={5}
            />
          </div>
          <button
            className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
            type="submit"
          >
            Post Question
          </button>
        </form>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold">Recent Questions</h2>
        <div className="space-y-4">
          <Link href="/qna/adsfadfadf">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  How do I set up a React project from scratch?
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span>@jdoe</span>
                  <span className="mx-2">•</span>
                  <span>May 23, 2024</span>
                </div>
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                I&apos;m new to React and I&apos;m trying to set up a project
                from scratch. What are the steps I should follow?
              </p>
            </div>
          </Link>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">
                What is the best way to handle state in a React app?
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>@sarahj</span>
                <span className="mx-2">•</span>
                <span>May 22, 2024</span>
              </div>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              I&apos;m building a React app and I&apos;m not sure how to best
              manage the state. Any recommendations?
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">
                How can I improve the performance of my Next.js app?
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>@msmith</span>
                <span className="mx-2">•</span>
                <span>May 21, 2024</span>
              </div>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              I&apos;m using Next.js for my app, but I&apos;m noticing some
              performance issues. What can I do to improve it?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

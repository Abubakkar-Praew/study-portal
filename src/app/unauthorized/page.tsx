export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-md w-full rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Access denied</h1>
        <p className="mt-2 text-sm text-gray-600">
          You don't have permission to access this page. Please contact the administrator.
        </p>
        <a
          href="/"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white text-sm"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Lead Manager</h1>
          <p className="text-gray-600 mb-8">Manage your leads efficiently and stay organized.</p>

          <div className="flex flex-col gap-4">
            <Link
              href="/add-lead"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 text-center"
            >
              ➕ Add New Lead
            </Link>
            <Link
              href="/leads"
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200 text-center"
            >
              📋 View Leads
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">
        Created by <strong>Girma Wakeyo </strong> with powerful greeting
      </footer>
    </div>
  );
}

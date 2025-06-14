"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchLeads = async () => {
      try {
          const res = await axios.get(`${baseURL}/api/leads`);
 
        setLeads(res.data);
      } catch (err) {
        setError("Failed to fetch leads");
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-black">📋 Leads List</h1>
          {/* Add Lead Button */}
          <button
            onClick={() => router.push("/add-lead")}
            className="bg-indigo-300 hover:bg-indigo-400 text-black px-4 py-2 rounded"
          >
            Add Lead
          </button>
        </div>

        {error && <p className="text-black">{error}</p>}

        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left text-black">Name</th>
              <th className="border px-4 py-2 text-left text-black">Email</th>
              <th className="border px-4 py-2 text-left text-black">Status</th>
              <th className="border px-4 py-2 text-left text-black">Created At</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-black">{lead.name}</td>
                <td className="border px-4 py-2 text-black">{lead.email}</td>
                <td className="border px-4 py-2">
                  <span className="inline-block px-2 py-1 text-sm rounded bg-blue-100 text-black">
                    {lead.status}
                  </span>
                </td>
                <td className="border px-4 py-2 text-black">
                  {new Date(lead.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {leads.length === 0 && !error && (
          <p className="text-black mt-4">No leads found.</p>
        )}
      </div>
    </div>
  );
}

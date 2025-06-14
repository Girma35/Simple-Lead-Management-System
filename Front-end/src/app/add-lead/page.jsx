"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddLeadPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "New",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const baseURL = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${baseURL}/api/leads`, form);

      if (response.status === 201) {
        setMessage("Lead added successfully!");
        setForm({
          name: "",
          email: "",
          status: "New",
        });
      }
    } catch (error) {
      setMessage(
        "Error: " + (error.response?.data?.error || "Failed to add lead")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <header className="text-center mb-8">
            <h1 className="text-2xl font-bold text-black">Add New Lead</h1>
            <p className="mt-2 text-sm text-black">
              Fill in the details below to create a new lead
            </p>

            {/* View Leads Button */}
            <button
              onClick={() => router.push("/leads")}
              className="mt-4 bg-indigo-300 hover:bg-indigo-400 text-black px-4 py-2 rounded"
            >
              View Leads
            </button>
          </header>

          {message && (
            <div
              className={`mb-6 p-4 rounded-md ${
                message.includes("Error")
                  ? "bg-red-50 text-black"
                  : "bg-green-50 text-black"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-black"
              >
                Lead Status
              </label>
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              >
                <option value="New" className="text-black">
                  New
                </option>
                <option value="Engaged" className="text-black">
                  Engaged
                </option>
                <option value="Proposal Sent" className="text-black">
                  Proposal Sent
                </option>
                <option value="Closed-Won" className="text-black">
                  Closed-Won
                </option>
                <option value="Closed-Lost" className="text-black">
                  Closed-Lost
                </option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black ${
                  isSubmitting
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-300 hover:bg-indigo-400"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isSubmitting ? "Adding Lead..." : "Add Lead"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

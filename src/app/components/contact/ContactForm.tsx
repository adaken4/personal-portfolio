"use client";

import { useState } from "react";
import { LuSend } from "react-icons/lu";
import StatusMessage from "./StatusMessage";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (formData.name && formData.email && formData.message) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-xl dark:border-gray-700 dark:bg-gray-900">
      <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Send a Message
      </h3>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-cyan-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-cyan-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-cyan-500"
            placeholder="Tell me about your project..."
          />
        </div>

        {status !== "idle" && <StatusMessage status={status} />}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Sending...
            </>
          ) : (
            <>
              <LuSend size={20} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

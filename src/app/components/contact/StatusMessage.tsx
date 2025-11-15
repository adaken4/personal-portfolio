import { LuCircleCheck, LuCircleAlert } from "react-icons/lu";

interface StatusMessageProps {
  readonly status: "success" | "error";
}

export default function StatusMessage({ status }: StatusMessageProps) {
  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
        <LuCircleCheck size={20} />
        <p className="text-sm font-medium">
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
      <LuCircleAlert size={20} />
      <p className="text-sm font-medium">
        Please fill in all fields correctly.
      </p>
    </div>
  );
}

import type { ReactNode } from "react";

export default function AdminTableShell({
  title,
  subtitle,
  primaryAction,
  children,
}: {
  title: string;
  subtitle?: string;
  primaryAction?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
        </div>
        {primaryAction}
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-sm">{children}</div>
    </div>
  );
}

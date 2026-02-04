"use client";

const COLOR_STYLES = {
  blue: {
    ring: "ring-blue-100",
    bg: "bg-blue-50",
    text: "text-blue-900",
    hint: "text-blue-700",
  },
  green: {
    ring: "ring-emerald-100",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    hint: "text-emerald-700",
  },
  amber: {
    ring: "ring-amber-100",
    bg: "bg-amber-50",
    text: "text-amber-900",
    hint: "text-amber-700",
  },
  purple: {
    ring: "ring-purple-100",
    bg: "bg-purple-50",
    text: "text-purple-900",
    hint: "text-purple-700",
  },
} as const;

type ColorKey = keyof typeof COLOR_STYLES;

type StudentStatCardProps = {
  label: string;
  value: number | string;
  hint?: string;
  color?: ColorKey;
};

export default function StudentStatCard({
  label,
  value,
  hint,
  color = "blue",
}: StudentStatCardProps) {
  const styles = COLOR_STYLES[color] ?? COLOR_STYLES.blue;

  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm ring-1 ${styles.ring}`}>
      <div className="text-sm text-gray-500">{label}</div>
      <div className={`mt-2 inline-flex items-center rounded-xl px-3 py-1 text-2xl font-semibold ${styles.bg} ${styles.text}`}>
        {value}
      </div>
      {hint && <div className={`mt-2 text-xs ${styles.hint}`}>{hint}</div>}
    </div>
  );
}

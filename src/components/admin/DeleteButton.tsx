"use client";
import React from "react";

export default function DeleteButton({ message = "Wire this to DELETE API" }: { message?: string }) {
  return (
    <button
      className="rounded-lg border px-3 py-1.5 text-xs text-red-600 hover:bg-red-50"
      onClick={() => alert(message)}
    >
      Delete
    </button>
  );
}

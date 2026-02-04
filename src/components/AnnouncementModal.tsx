"use client";

import { announcements } from "@/lib/site-data";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show modal on page load if there are announcements
    if (announcements.length > 0) {
      // Small delay for smooth animation
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  if (!isOpen || announcements.length === 0) {
    return null;
  }

  const currentAnnouncement = announcements[currentIndex];

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < announcements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Generate a unique ID for each university based on announcement and index
  const getUniversityId = (announcementId: number, uniIndex: number) => {
    return `${announcementId}-${uniIndex}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        style={{ animation: "fadeIn 0.3s ease-out" }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        style={{ animation: "fadeIn 0.3s ease-out" }}
      >
        <div
          className="pointer-events-auto w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          style={{ animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Header with Country Name */}
          <div
            className="px-8 py-6 text-white"
            style={{ backgroundColor: '#3B82F6' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">📢</span>
              <div>
                <h2 className="text-2xl font-bold">{currentAnnouncement.country}</h2>
                <p className="text-sm text-blue-100 mt-1">{currentAnnouncement.date}</p>
              </div>
            </div>
          </div>

          {/* Universities List */}
          <div className="px-8 py-6 space-y-3">
            {currentAnnouncement.universities.map((uni, idx) => (
              <Link
                key={idx}
                href={`/university/${getUniversityId(currentAnnouncement.id, idx)}`}
                onClick={handleClose}
                className="block p-4 rounded-xl border hover:shadow-md hover:border-blue-400 transition cursor-pointer group"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {uni.name}
                    </h4>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-gray-600">
                        📅 Intake: <span className="font-medium text-gray-900">{uni.intake}</span>
                      </span>
                      <span className="text-gray-600">
                        💰 Fee: <span className="font-medium text-blue-600">{uni.totalFee}</span>
                      </span>
                      {!uni.pte && (
                        <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                          MOI Required
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="ml-4 text-blue-600 group-hover:translate-x-1 transition">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer with Navigation */}
          <div className="px-8 py-4 border-t bg-gray-50 flex items-center justify-between gap-4" style={{ borderColor: '#E5E7EB' }}>
            <div className="flex items-center gap-2">
              {announcements.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="px-3 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: currentIndex === 0 ? '#E5E7EB' : '#3B82F6',
                      color: currentIndex === 0 ? '#9CA3AF' : '#FFFFFF'
                    }}
                  >
                    ← Prev
                  </button>
                  <span className="text-sm font-semibold text-gray-700">
                    {currentIndex + 1} / {announcements.length}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === announcements.length - 1}
                    className="px-3 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: currentIndex === announcements.length - 1 ? '#E5E7EB' : '#3B82F6',
                      color: currentIndex === announcements.length - 1 ? '#9CA3AF' : '#FFFFFF'
                    }}
                  >
                    Next →
                  </button>
                </>
              )}
            </div>
            <button
              onClick={handleClose}
              className="px-6 py-2 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: '#3B82F6' }}
            >
              Close
            </button>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes slideUp {
              from {
                transform: translateY(2rem);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}

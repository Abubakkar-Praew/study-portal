"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/admin/StatCard";

type DashboardStats = {
  countries: number;
  universities: number;
  courses: number;
  students: number;
};

const COUNTRIES_KEY = "admin_countries";
const DEFAULT_COUNTRIES = [{ name: "UK", slug: "uk", active: true }];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    countries: 0,
    universities: 0,
    courses: 0,
    students: 0,
  });

  useEffect(() => {
    const loadStats = () => {
      try {
        const countriesStored = window.localStorage.getItem(COUNTRIES_KEY);
        const list = countriesStored ? JSON.parse(countriesStored) : DEFAULT_COUNTRIES;
        const countries = Array.isArray(list)
          ? list.filter((c: { active?: boolean }) => c.active !== false).length
          : 1;

        const countryList = Array.isArray(list) && list.length > 0 ? list : DEFAULT_COUNTRIES;
        const universities = countryList.reduce((total: number, country: { slug: string }) => {
          const stored = window.localStorage.getItem(`admin_${country.slug}_universities`);
          const parsed = stored ? JSON.parse(stored) : [];
          return total + (Array.isArray(parsed) ? parsed.length : 0);
        }, 0);

        const courses = countryList.reduce((total: number, country: { slug: string }) => {
          const stored = window.localStorage.getItem(`admin_${country.slug}_courses`);
          const parsed = stored ? JSON.parse(stored) : [];
          return total + (Array.isArray(parsed) ? parsed.length : 0);
        }, 0);
        setStats((prev) => ({
          ...prev,
          universities,
          courses,
          countries,
        }));
      } catch {
        setStats((prev) => ({ ...prev, universities: 0, courses: 0, countries: 1 }));
      }
    };

    loadStats();
    window.addEventListener("admin_countries_updated", loadStats);
    window.addEventListener("admin_courses_updated", loadStats);
    window.addEventListener("admin_universities_updated", loadStats);
    return () => {
      window.removeEventListener("admin_countries_updated", loadStats);
      window.removeEventListener("admin_courses_updated", loadStats);
      window.removeEventListener("admin_universities_updated", loadStats);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Countries" value={stats.countries} hint="Active countries" />
        <StatCard label="Universities" value={stats.universities} hint="Total universities" />
        <StatCard label="Courses" value={stats.courses} hint="Active courses" />
        <StatCard label="Students" value={stats.students} hint="Registered users" />
      </div>
    </div>
  );
}

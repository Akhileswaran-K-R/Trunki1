import React from "react";
import { Users, BarChart3, FileText, Settings } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { name: "Normal", students: 24 },
  { name: "Monitor", students: 12 },
  { name: "At Risk", students: 6 },
];

const TeacherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 pt-12 h-screen bg-white shadow-md hidden md:flex flex-col fixed">
        <nav className="flex-1 px-4 py-6 space-y-3">
          <SidebarItem icon={<BarChart3 />} label="Dashboard" active />
          <SidebarItem icon={<Users />} label="Students" />
          <SidebarItem icon={<FileText />} label="Reports" />
          <SidebarItem icon={<Settings />} label="Settings" />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 p-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <button className="bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold">
            + New Session
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Students" value="42" />
          <StatCard title="Tests Completed" value="38" />
          <StatCard title="At-Risk Alerts" value="6" />
        </div>

        {/* RECENT STUDENTS */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Students</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Name</th>
                <th>Number</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <StudentRow name="Aarav" number="9876543210" status="Normal" score="82%" />
              <StudentRow name="Diya" number="9123456789" status="At Risk" score="54%" />
              <StudentRow name="Kabir" number="9988776655" status="Monitor" score="67%" />
            </tbody>
          </table>
        </div>

        {/* PERFORMANCE CHART */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Student Risk Distribution</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="students" fill="#ec4899" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
      ${active ? "bg-pink-100 text-pink-600" : "text-gray-600 hover:bg-gray-100"}`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <p className="text-gray-500">{title}</p>
    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
  </div>
);

const StudentRow = ({ name, number, status, score }) => (
  <tr className="border-b last:border-none">
    <td className="py-3">{name}</td>
    <td>{number}</td>
    <td>
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold
          ${status === "At Risk"
            ? "bg-red-100 text-red-600"
            : status === "Monitor"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-green-100 text-green-600"}`}
      >
        {status}
      </span>
    </td>
    <td>{score}</td>
  </tr>
);

export default TeacherDashboard;

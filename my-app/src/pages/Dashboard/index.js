import React from "react";
import TeacherDashboard from "./TeacherDashboard";
import BusinessmanDashboard from "./BusinessDashboard";

export default function Dashboard({ user }) {
  if (user.role === "TEACHER") return <TeacherDashboard user={user} />;
  if (user.role === "BUSINESSMAN") return <BusinessmanDashboard user={user} />;
  return <div>No dashboard available for your role.</div>;
}
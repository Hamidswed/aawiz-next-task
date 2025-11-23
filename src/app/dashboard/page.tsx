import { Metadata } from "next";
import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { AuthGuard } from "@/components/auth/auth-guard";

export const metadata: Metadata = {
  title: "Dashboard | Portfolio",
  description: "Interactive dashboard with real-time data visualization and analytics",
};

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
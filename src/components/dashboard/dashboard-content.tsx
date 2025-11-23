"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useUserEmail } from "@/hooks/useUserEmail";

// Code splitting: Using dynamic import for lazy loading components
const StatsGrid = dynamic(
  () =>
    import("@/components/dashboard/stats-grid").then((mod) => ({
      default: mod.StatsGrid,
    })),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-muted rounded-lg animate-pulse"></div>
        ))}
      </div>
    ),
    ssr: true,
  }
);

const RecentPosts = dynamic(
  () =>
    import("@/components/dashboard/recent-posts").then((mod) => ({
      default: mod.RecentPosts,
    })),
  {
    loading: () => (
      <div className="h-64 bg-muted rounded-lg animate-pulse"></div>
    ),
    ssr: true,
  }
);

const UsersList = dynamic(
  () =>
    import("@/components/dashboard/users-list").then((mod) => ({
      default: mod.UsersList,
    })),
  {
    loading: () => (
      <div className="h-64 bg-muted rounded-lg animate-pulse"></div>
    ),
    ssr: true,
  }
);

export function DashboardContent() {
  const { posts, users, loading, error, refetch } = useDashboardData();
  const userEmail = useUserEmail();

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-destructive mb-4">
            Error Loading Dashboard
          </h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back{userEmail ? `, ${userEmail.split("@")[0]}` : ""}!
            Here&apos;s your analytics overview.
          </p>
        </div>
        <Button onClick={refetch} disabled={loading}>
          <RefreshCw
            className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`}
          />
          Refresh
        </Button>
      </div>

      <StatsGrid posts={posts} users={users} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentPosts posts={posts} loading={loading} />
        <UsersList users={users} loading={loading} />
      </div>
    </div>
  );
}

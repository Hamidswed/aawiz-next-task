'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Activity, DollarSign } from 'lucide-react';
import { DashboardStats } from '@/types/dashboard';
import { Post, User } from '@/types/dashboard';

interface StatsGridProps {
  posts: Post[];
  users: User[];
}

export function StatsGrid({ posts, users }: StatsGridProps) {
  const stats: DashboardStats[] = [
    {
      title: 'Total Posts',
      value: posts.length.toString(),
      description: 'Published articles',
      trend: '+12%',
    },
    {
      title: 'Active Users',
      value: users.length.toString(),
      description: 'Registered members',
      trend: '+8%',
    },
    {
      title: 'Engagement',
      value: '94.2%',
      description: 'User interaction rate',
      trend: '+2.1%',
    },
    {
      title: 'Revenue',
      value: '$12,345',
      description: 'Monthly earnings',
      trend: '+15%',
    },
  ];

  const icons = [Activity, Users, TrendingUp, DollarSign];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = icons[index];
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.trend}</span>{' '}
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}



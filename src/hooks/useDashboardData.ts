import { useState, useEffect, useCallback } from 'react';
import apiClient from '@/lib/api/axios';
import { Post, User } from '@/types/dashboard';

interface UseDashboardDataReturn {
  posts: Post[];
  users: User[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useDashboardData(): UseDashboardDataReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [postsResponse, usersResponse] = await Promise.all([
        apiClient.get<Post[]>('/posts?_limit=6'),
        apiClient.get<User[]>('/users'),
      ]);

      setPosts(postsResponse.data);
      setUsers(usersResponse.data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    posts,
    users,
    loading,
    error,
    refetch: fetchData,
  };
}



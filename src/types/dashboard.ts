// Dashboard data types
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface DashboardStats {
  title: string;
  value: string;
  description: string;
  trend: string;
}

export interface DashboardData {
  posts: Post[];
  users: User[];
}



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import UserActivities from '../components/UserActivities';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Activity {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const [userRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        ]);

        if (!userRes.ok || !postsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const userData = await userRes.json();
        const postsData = await postsRes.json();

        setUser(userData);
        setActivities(postsData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <UserProfile user={user} />
      <UserActivities activities={activities} />
    </div>
  );
};

export default UserPage;

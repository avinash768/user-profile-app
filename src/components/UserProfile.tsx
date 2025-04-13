import React from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
    <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
    <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
  </div>
  );
};

export default UserProfile;

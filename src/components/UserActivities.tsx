import React from 'react';

interface Activity {
  id: number;
  title: string;
  body: string;
}

interface Props {
  activities: Activity[];
}

const UserActivities: React.FC<Props> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">User Activities</h3>
      <ul className="space-y-4">
        {activities.map(act => (
          <li key={act.id} className="border-b pb-2">
            <h4 className="text-md font-medium text-blue-700">{act.title}</h4>
            <p className="text-gray-600">{act.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;

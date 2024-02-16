
import React from 'react';

const UserTable = () => {

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">User Table</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Last Login</th>
          </tr>
        </thead>
        <tbody>
          {/* {userData.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.lastLogin}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

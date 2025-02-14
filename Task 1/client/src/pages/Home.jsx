import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, users, fetchUsers } = useContext(UserContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {user ? (
        <>
          <h1 className="text-3xl mb-4">Welcome, {user.name}!</h1>
          <p className="mb-6">{user.description}</p>
          <h2 className="text-2xl mb-4">All Registered Users</h2>
          <table className="w-full max-w-lg bg-gray-800 border border-gray-700">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Name</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email} className="border-b border-gray-700">
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl mb-4">You are not logged in</h1>
          <p className="mb-4">Please login or register to access the content.</p>
          <Link to="/login" className="text-blue-400 mr-4">Login</Link>
          <Link to="/register" className="text-blue-400">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
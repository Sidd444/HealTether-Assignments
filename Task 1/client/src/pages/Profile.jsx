import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p className="text-center mt-10 text-xl">Please log in to view your profile.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Description:</strong> {user.description}</p>
    </div>
  );
};

export default Profile;
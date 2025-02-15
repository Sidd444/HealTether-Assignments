import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState('');
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await register(name, email, password, description);
        alert("Sign up successful");
        navigate('/login');
    } catch (err) { 
        alert("sign up error");
        setError(err.response?.data?.message || 'Error signing up');
    }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Register</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 mb-2 bg-gray-700" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mb-2 bg-gray-700" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 mb-2 bg-gray-700" required />
          <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full p-2 mb-4 bg-gray-700" required />
          <button type="submit" className="w-full p-2 bg-green-500 hover:bg-green-700">Register</button>
        </form>
        <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-400">Login</Link></p>
      </div>
    </div>
  );
};
export default Register;
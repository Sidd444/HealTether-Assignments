import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(email, password);
        alert("Login Succesful");
        navigate('/');
    } catch (err) {
        alert("Login failed");
        setError('Invalid email or password');
    }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mb-2 bg-gray-700" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 mb-4 bg-gray-700" required />
          <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700">Login</button>
        </form>
        <p className="mt-4">Don't have an account? <Link to="/register" className="text-blue-400">Register</Link></p>
      </div>
    </div>
  );
};
export default Login;

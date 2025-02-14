import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../serverURL";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      axios
        .get(`${SERVER_URL}/me`)
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  const register = async (name, email, password, description) => {
    try {
      const res = await axios.post(`${SERVER_URL}/register`, {
        name,
        email,
        password,
        description,
      });
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      setToken(res.data.token);
      const userRes = await axios.get(`${SERVER_URL}/me`);
      setUser(userRes.data);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${SERVER_URL}/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      setToken(res.data.token);

      const userRes = await axios.get(`${SERVER_URL}/me`);
      setUser(userRes.data);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/`);
      setUsers(data);
    } catch (error) {
      console.error("Fetching users failed:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout, users, fetchUsers, token }}>
      {children}
    </UserContext.Provider>
  );
};

// 📄 src/pages/Login.tsx

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'student' | 'admin' | 'institution'>('student');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(selectedRole);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md space-y-4 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value as 'student' | 'admin' | 'institution')}
          className="w-full p-2 border rounded-md"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="institution">Institution</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Continue as {selectedRole}
        </button>
      </form>
    </div>
  );
};

export default Login;

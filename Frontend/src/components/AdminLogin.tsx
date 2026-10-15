import { useState } from "react";

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (password === "admin123") {
      onLogin();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>

      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default AdminLogin;
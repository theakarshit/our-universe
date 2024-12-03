import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ALLOWED_USERS = [
  { username: "harshika09", password: "9028" },
  { username: "theakarshit", password: "4420" },
];

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 800));

    const user = ALLOWED_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-navy">
      <div className="w-full max-w-md animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to Our Universe
          </h1>
          <p className="text-gray-400">
            Enter your login details to access your account
          </p>
        </div>

        <div className="glass rounded-xl p-8 space-y-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-200"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-navy-light border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent input-glow transition-shadow duration-300"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-navy-light border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent input-glow transition-shadow duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-accent hover:bg-accent-soft text-navy font-medium rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Note: This is a private universe. New account creation is not
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

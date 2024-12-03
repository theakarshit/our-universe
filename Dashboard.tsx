import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-navy">
      {/* Navigation */}
      <nav className="glass fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/5417/5417147.png" 
            alt="Logo" 
            className="h-12 w-12"
          />
          <div className="flex gap-8 text-white font-light">
            <Link to="#" className="hover:text-accent transition-colors">Bio Card</Link>
            <Link to="#" className="hover:text-accent transition-colors">Memories</Link>
            <Link to="#" className="hover:text-accent transition-colors">Thoughts</Link>
            <Link to="#" className="hover:text-accent transition-colors">Images</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="min-h-screen bg-cover bg-center flex items-center justify-between px-20"
        style={{ backgroundImage: 'url(https://i.ibb.co/hHJXv8b/Untitled-design-156.png)' }}
      >
        {/* Akarshit Card */}
        <div className="glass p-8 rounded-lg w-80 text-center space-y-4 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="flex justify-center">
            <div className="bg-navy-light rounded-full p-4">
              <UserRound size={64} className="text-accent" />
            </div>
          </div>
          <h3 className="text-2xl text-white font-light">Akarshit</h3>
          <p className="text-lg text-accent">Aries</p>
          <p className="text-sm text-gray-300">
            Aries are natural leaders, full of energy, determination, and a courageous spirit, always ready to take on challenges.
          </p>
        </div>

        {/* Harshika Card */}
        <div className="glass p-8 rounded-lg w-80 text-center space-y-4 animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="flex justify-center">
            <div className="bg-navy-light rounded-full p-4">
              <UserRound size={64} className="text-accent" />
            </div>
          </div>
          <h3 className="text-2xl text-white font-light">Harshika</h3>
          <p className="text-lg text-accent">Virgo</p>
          <p className="text-sm text-gray-300">
            Virgos are perfectionists, detail-oriented, practical, and deeply thoughtful in their actions, always seeking balance and harmony.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

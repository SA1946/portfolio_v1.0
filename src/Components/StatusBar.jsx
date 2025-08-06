import { Github, Mail } from "lucide-react";
const StatusBar = ({ onLine }) => {
  return (
    <div className="mt-4 bg-gray-800 rounded-lg p-3 flex items-center justify-between sm:text-[16px] text-[10px]">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400">Online</span>
        </div>
        <div className="text-gray-400">Lines: {onLine.length}</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-gray-400">Terminal Portfolio v1.0</div>
        <div className="flex items-center space-x-2 text-gray-400">
          <button
            onClick={() => window.open("https://github.com/SA1946", "_blank")}
          >
            <Github className="w-4 h-4" />
          </button>

          <a href="mailto:measreaksa0@gmail.com">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

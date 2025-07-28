import { ChevronRight } from "lucide-react";
const OutputCmd = ({ onOutput }) => {
  return (
    <>
      {onOutput.map((line, index) => (
        <div key={index} className="mb-2">
          {line.type === "system" && (
            <div className="text-blue-400">
              [{line.times}] {line.content}
            </div>
          )}
          {line.type === "command" && (
            <div className="text-green-400 flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" />
              {line.content}
            </div>
          )}
          {line.type === "response" && (
            <div className="text-gray-300 ml-6 whitespace-pre-line">
              {line.content}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default OutputCmd;

import { ChevronRight } from "lucide-react";

const InputCmd = ({
  inputRef,
  handleKeyDown,
  currentCommand,
  isTyping,
  setCurrentCommand,
  showCursor,
}) => {
  return (
    <div className="flex items-center text-green-400 mt-4">
      <ChevronRight className="w-4 h-4 mr-1" />
      <input
        ref={inputRef}
        type="text"
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none flex-1 text-green-400 font-mono"
        placeholder="Type 'help' for commands..."
        disabled={isTyping}
      />
      <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>▋</span>
    </div>
  );
};

export default InputCmd;

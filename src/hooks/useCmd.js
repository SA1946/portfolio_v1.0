import { useRef, useState, useEffect } from "react";
import { commands } from "../Data/terminalCMD";

const useCmd = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const autoScrollRef = useRef(null);
  const inputRef = useRef(null);

  // auto_scroll and focus on input in terminal
  useEffect(() => {
    if (autoScrollRef.current && inputRef.current) {
      inputRef.current.focus();
      autoScrollRef.current.scrollTop = autoScrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const typeCommand = (text, callback) => {
    setIsTyping(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setCurrentCommand(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 50);
  };

  // Handle command execution
  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    if (command === "clear") {
      setTerminalLines([]);
      setCurrentCommand("");
      return;
    }
    console.log("Executing command:", command);

    // Add command to history
    setTerminalLines((prev) => [
      ...prev,
      {
        type: "command",
        content: cmd,
        // times: new Date().toLocaleTimeString(),
      },
    ]);

    if (command === "github") {
      window.open("https://github.com/SA1946");
    }

    // Add response
    const response =
      commands[command] ||
      `Command not found: ${command}. Type 'help' for available commands.`;
    setTimeout(() => {
      setTerminalLines((prev) => [
        ...prev,
        {
          type: "response",
          content: response,
          // times: new Date().toLocaleTimeString(),
        },
      ]);
    }, 300);

    setCurrentCommand("");
  };

  // Handle key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentCommand.trim()) {
      executeCommand(currentCommand);
    }
  };

  // Auto-demo
  const runDemo = () => {
    const demoCommands = ["whoami", "about", "projects", "skills", "contact"];
    let index = 0;
    autoScrollRef.current.disable = true;

    function runNext() {
      if (index < demoCommands.length) {
        typeCommand(demoCommands[index], () => {
          executeCommand(demoCommands[index]);
          index++;
          setTimeout(runNext, 2000);
        });
      }
    }
    runNext();
  };
  return {
    currentCommand,
    setCurrentCommand,
    isTyping,
    terminalLines,
    setTerminalLines,
    showCursor,
    setShowCursor,
    autoScrollRef,
    inputRef,
    executeCommand,
    handleKeyDown,
    runDemo,
    // type Command,
  };
};

export default useCmd;

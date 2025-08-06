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
      autoScrollRef.current.scrollTop = autoScrollRef.current.scrollHeight;
      if (inputRef.current && window.innerWidth >= 640) {
        // focus only in large screen
        inputRef.current.focus();
      }
    }
  }, [terminalLines]);

  // Initialize welcome
  useEffect(() => {
    const welcome = [
      "Welcome to Synsa Creative Portfolio Terminal",
      "Starting system...",
      "Ready! 🚀",
    ];

    // const showNextLine = () => { //using timeout
    //   if (lineIndex < welcome.length) {
    //     setTerminalLines((prev) => [
    //       ...prev,
    //       {
    //         type: "system",
    //         content: welcome[lineIndex],
    //         times: new Date().toLocaleTimeString(),
    //       },
    //     ]);
    //     lineIndex++;
    //     setTimeout(showNextLine, 800);
    //   }
    // };
    // setTimeout(showNextLine, 500);

    let lineIndex = 0;
    const showNextLine = setInterval(() => {
      //using setinterval
      if (lineIndex < welcome.length) {
        setTerminalLines((pre) => [
          ...pre,
          {
            type: "system",
            content: welcome[lineIndex],
            times: new Date().toLocaleTimeString(),
          },
        ]);
        lineIndex++;
      } else {
        clearInterval(showNextLine);
      }
    }, 800);

    // Cursor blink
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(showNextLine);
      clearInterval(cursorBlink);
    };
  }, []);

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
} else if (command === "github") {
  window.open("https://github.com/SA1946");
} else if (command === "resume") {
  handleResumeDown();
}
// Let the rest of the function handle adding to terminal history
    console.log("Executing command:", command);

    // Add command to history
    setTerminalLines((prev) => [
      ...prev,
      {
        type: "command",
        content: cmd,
      },
    ]);

    // Add response
    const response =
      // if we type help. commands[command] becomes commands['help']
      commands[command] ||
      `Command not found: ${command}. Type 'help' for available commands.`;
    setTimeout(() => {
      setTerminalLines((prev) => [
        ...prev,
        {
          type: "response",
          content: response,
        },
      ]);
    }, 300);

    setCurrentCommand("");
  };

  // Handle keydown
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
  };

  // function handleResumeDown() {
  //   const link = document.createElement("a");
  //   link.href = "/CV_DALIN.pdf";
  //   link.download = "SA.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
  function handleResumeDown() {
    const link = document.createElement("a");
    Object.assign(link, {
      href: "/CV_Measreaksa.pdf",
      download: "CV_Measreaksa.pdf",
    });
    link.click();
  }
};

export default useCmd;

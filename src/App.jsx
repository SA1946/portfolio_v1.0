import React, { useEffect } from "react";
import {
  Navbar,
  AnimaACII,
  OutputCmd,
  Quickbtn,
  StatusBar,
  InputCmd,
} from "./Components";
import useCmd from "./hooks/useCmd";

function App() {
  const {
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
  } = useCmd();

  // Initialize welcome
  useEffect(() => {
    const welcome = [
      "Welcome to Synsa Creative Portfolio Terminal",
      "Starting system...",
      "Ready! 🚀",
    ];

    let lineIndex = 0;
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

  return (
    <div className="min-h-screen  bg-gray-900 text-green-400 font-mono">
      {/*  Navbar */}
      <Navbar onRunDemo={runDemo} onClear={executeCommand} />
      {/* Terminal  */}
      <div className=" min-h-screen pt-16  w-full">
        <div className="max-w-4xl mx-auto">
          <div className="mb-2 text-green-300 ">
            {/* ASCII  */}
            <AnimaACII />
          </div>

          {/* Quick btn */}
          <Quickbtn onHandleBtn={executeCommand} />

          <div
            ref={autoScrollRef}
            className=" IOcmd  bg-black rounded-lg p-4  border border-gray-700  max-h-80 overflow-y-scroll"
          >
            {/* Terminal Output */}
            <OutputCmd onOutput={terminalLines} />

            {/* Terminal Input*/}
            <InputCmd
              inputRef={inputRef}
              handleKeyDown={handleKeyDown}
              isTyping={isTyping}
              currentCommand={currentCommand}
              setCurrentCommand={setCurrentCommand}
              showCursor={showCursor}
            />
          </div>

          {/* Status Bar */}
          <StatusBar onLine={terminalLines} />
        </div>
      </div>
    </div>
  );
}

export default App;

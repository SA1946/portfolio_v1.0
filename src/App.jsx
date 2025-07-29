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
    autoScrollRef,
    inputRef,
    executeCommand,
    handleKeyDown,
    runDemo,
  } = useCmd();

  
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

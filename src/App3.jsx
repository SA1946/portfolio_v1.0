import { useEffect, useState } from "react";

// Sample ASCII art for demonstration
const SAMPLE_ASCII = `
    /\\_/\\  
   (  o.o ) 
    > ^ <
  ____|____
 |         |
 | HELLO!  |
 |_________|
`.trim();

const AnimatedASCII1 = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const lines = SAMPLE_ASCII.split("\n");

  useEffect(() => {
    setDisplayedLines([]); // Reset on mount
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines(prev => [...prev, lines[index]]);
      index++;
      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Line by Line Animation</h3>
      <pre className="text-sm leading-tight font-mono bg-gray-100 p-4 rounded">
        {displayedLines.join("\n")}
      </pre>
    </div>
  );
};

const AnimatedASCII2 = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = SAMPLE_ASCII;

  useEffect(() => {
    setDisplayedText(""); // Reset on mount
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Character by Character (Typewriter)</h3>
      <pre className="text-sm leading-tight font-mono bg-gray-100 p-4 rounded">
        {displayedText}
      </pre>
    </div>
  );
};

const AnimatedASCII3 = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const lines = SAMPLE_ASCII.split("\n");

  useEffect(() => {
    // Reset state on mount
    setDisplayedText("");
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);

    const interval = setInterval(() => {
      if (currentLineIndex < lines.length) {
        const currentLine = lines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          // Add character to current line
          setDisplayedText(prev => {
            const prevLines = prev.split("\n");
            prevLines[currentLineIndex] = (prevLines[currentLineIndex] || "") + currentLine[currentCharIndex];
            return prevLines.join("\n");
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Move to next line
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          if (currentLineIndex < lines.length - 1) {
            setDisplayedText(prev => prev + "\n");
          }
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Line by Line Typewriter</h3>
      <pre className="text-sm leading-tight font-mono bg-gray-100 p-4 rounded">
        {displayedText}
      </pre>
    </div>
  );
};

const AnimatedASCII4 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Fade In Animation</h3>
      <pre 
        className={`text-sm leading-tight font-mono bg-gray-100 p-4 rounded transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {SAMPLE_ASCII}
      </pre>
    </div>
  );
};

const ResetButton = ({ onReset, children }) => (
  <button 
    onClick={onReset}
    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
  >
    {children}
  </button>
);

const App3 = () => {
  const [key, setKey] = useState(0);

  const resetAnimations = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ASCII Art Animation Examples</h1>
      
      <ResetButton onReset={resetAnimations}>
        Reset All Animations
      </ResetButton>

      <div key={key}>
        <AnimatedASCII1 />
        <AnimatedASCII2 />
        <AnimatedASCII3 />
        <AnimatedASCII4 />
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded">
        <h4 className="font-semibold mb-2">For your code, try this fix:</h4>
        <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
{`const AnimaACII = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const lines = ACII().trim().split("\\n");

  useEffect(() => {
    setDisplayedLines([]); // Reset state
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines(prev => [...prev, lines[index]]);
      index++;
      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []); // Add dependency array

  return (
    <pre className="text-sm leading-tight">
      {displayedLines.join("\\n")}
    </pre>
  );
};`}
        </pre>
      </div>
    </div>
  );
};

export default App3;
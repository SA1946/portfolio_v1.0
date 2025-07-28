import { useEffect, useState } from "react";

function useTypeWriter(text, speed) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    
    let index = 0;
    const time = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(time);
      }
    }, speed);

    return () => {
      clearInterval(time);
    };
  }, [text, speed]);
  return { displayText, isComplete };
}
export default useTypeWriter;

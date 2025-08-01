import { ACII } from "../Data/terminalCMD";
import useTypeWriter from "../hooks/useTypeWriter";

const AnimaACII = () => {
  const lines = ACII();
  const { displayText, isComplet } = useTypeWriter(lines, 1);

  return (
    <pre className="md:text-sm md:leading-tight text-center sm:text-[10px] text-[6px] leading-none   ">
      {displayText}
      {<span className="animate-ping">|</span>}
    </pre>
  );
};

export default AnimaACII;

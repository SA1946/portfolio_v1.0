const quickbtn = ["about", "projects", "skills", "contact"];

const Quickbtn = ({ onHandleBtn }) => {
  return (
    <div className="mb-6 ">
      <p className="text-gray-400 text-center mb-3"> Quick button</p>

      <div className="flex flex-row sm:gap-4 gap-1 justify-center items-center mb-3">
        {quickbtn.map((cmd) => {
          return (
            <button
              key={cmd}
              className=" text-green-400 sm:px-5 sm:py-2.5 px-2 py-2 rounded bg-gray-800 border border-gray-600 hover:bg-gray-700 transition-colors hover:text-green-300"
              onClick={() => onHandleBtn(cmd)}
            >
              {cmd}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Quickbtn;

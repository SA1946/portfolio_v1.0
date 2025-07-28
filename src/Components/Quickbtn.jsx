const quickbtn = ["about", "projects", "skills", "contact"];

const Quickbtn = ({ onHandleBtn }) => {
  return (
    <div className="text-center mb-6">
      <p className="text-gray-400 mb-3"> Quick button</p>
      <div className="flex gap-2 justify-center items-center mb-3">
        {quickbtn.map((cmd) => {
          return (
            <button
              key={cmd}
              className=" text-green-400 px-4 py-2.5 rounded bg-gray-800 border border-gray-600 hover:bg-gray-700 transition-colors hover:text-green-300"
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

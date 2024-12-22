import "./App.css";
import Logo from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
        <div className="shrink-0">
          <img className="w-12 h-12" src={Logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div className="p-1 bg-violet-500 hover:bg-violet-600 ">
        Hello I Am Shekhar Rawal
      </div>

      <nav className="flex justify-between mt-5 bg-slate-200 h-10">
        <div className="flex justify-center items-center">
          <img className="h-8" src={Logo} alt="reactLogo" />
        </div>
        <ul className="flex space-x-20 ">
          <li className=" ">Home</li>
          <li>About</li>
          <li>Contect US</li>
        </ul>
      </nav>
    </>
  );
}

export default App;

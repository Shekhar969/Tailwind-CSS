import './App.css';
import Logo from './assets/react.svg';

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
    </>
  );
}

export default App;

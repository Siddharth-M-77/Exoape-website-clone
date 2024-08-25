import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Play from "./Components/Play";
import Work from "./Components/Work";

export default function App() {
  return (
    <div className="w-full h-full overflow-hidden ">
      <Navbar />
      <Landing/>
      <Work/>
      <Play/>
    </div>
  );
}

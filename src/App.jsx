import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

export default function App() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <Landing/>
      <Work/>
    </div>
  );
}

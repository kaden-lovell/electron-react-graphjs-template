import LineGraph from "./components/LineGraph";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
  const uploadedFile = new File([], "");
  return (
    <div>
      <div id="navbar">
        <Nav></Nav>
      </div>

      <div id="content">
        <div className="flex justify-center text-center min-h-screen dark:bg-black">
          <LineGraph></LineGraph>
        </div>
      </div>
    </div>
  );
}

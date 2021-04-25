import { Component } from "react";
import useDarkMode from "../hooks/useDarkMode";
class Nav extends Component {
  state = {
    // initalize with no file selected
    selectedFile: null,
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>

          <p>Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    // set selected file event
    const onFileChange = (e) => {
      this.state.selectedFile = e.target.files[0];
      console.log(this.state.selectedFile);
    };

    return (
      <div>
        <nav className="bg-gray-800">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <DarkModeToggle></DarkModeToggle>
                </div>
              </div>
            </div>
            <div className="md:block">
              <div className="mr-6 ml-3 flex items-center md:ml-6">
                <input onChange={onFileChange} id="file-input" type="file" name="file-input" className="dark:text-white" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  handleUpload() {
    console.log("he there");
  }
}
function DarkModeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  if (colorTheme === "light") {
    return (
      <div>
        <a onClick={() => setTheme(colorTheme)} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
          Dark Mode
        </a>
      </div>
    );
  }
  return (
    <div>
      <a onClick={() => setTheme(colorTheme)} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Dark Mode
      </a>
    </div>
  );
}
export default Nav;

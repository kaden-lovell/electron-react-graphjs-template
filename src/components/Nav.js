import { Component } from "react";
import { parseIsolatedEntityName } from "typescript";
import useDarkMode from "../hooks/useDarkMode";
class Nav extends Component {
  state = {
    // initalize with no file selected
    selectedFile: null,
  };

  render() {
    // set selected file event
    const onFileChange = (e) => {
      var reader = new FileReader();
      reader.onload = (response) => {
        this.processCsvData(response.target.result);
      };
      reader.readAsText(e.target.files[0]);
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

  processCsvData(content) {
    var data = content.split("\n");
    var headers = data[0].split(",");
    var rows = data;
    var list = [];
    var obj = {};
    for (var i = 0; i < rows.length; i++) {
      var result = {};
      for (var j = 0; j < headers.length; j++) {
        result[headers[j]] = rows[i].split(",")[j];
      }
      list.push(result);
      console.log(result);
    }
    console.log(list);
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
  } else {
    return (
      <div>
        <a onClick={() => setTheme(colorTheme)} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Dark Mode
        </a>
      </div>
    );
  }
}
export default Nav;

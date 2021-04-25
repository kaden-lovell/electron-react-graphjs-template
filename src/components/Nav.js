import { Component } from "react";
import useDarkMode from "../hooks/useDarkMode";
class Nav extends Component {
  render() {
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
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
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
